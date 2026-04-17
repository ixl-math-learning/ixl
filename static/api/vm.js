import { spawn, exec } from 'child_process';
import { WebSocketServer } from 'ws';
import crypto from 'crypto';
import net from 'net';

const MAX_VMS = 3;
const SESSION_TIMEOUT = 20 * 60 * 1000;
const CONTAINER_IMAGE = 'budtmo/docker-android:emulator_11.0';
const PORT_RANGE_START = 6100;
const PORT_RANGE_END = 6200;

const activeSessions = new Map();
const usedPorts = new Set();

function execPromise(command, timeout = 30000) {
  return new Promise((resolve, reject) => {
    exec(command, { timeout }, (err, stdout, stderr) => {
      if (err) reject(new Error(stderr || err.message));
      else resolve(stdout.trim());
    });
  });
}

async function isPortInUse(port) {
  const dockerCheck = await execPromise(`docker ps --format '{{.Ports}}' | grep ':${port}->' || true`).catch(() => '');
  if (dockerCheck) return true;

  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => resolve(true));
    server.once('listening', () => {
      server.close();
      resolve(false);
    });
    server.listen(port, '0.0.0.0');
  });
}

async function getAvailablePort() {
  for (let port = PORT_RANGE_START; port <= PORT_RANGE_END; port++) {
    if (!usedPorts.has(port)) {
      const inUse = await isPortInUse(port);
      if (!inUse) {
        usedPorts.add(port);
        return port;
      }
    }
  }
  return null;
}

function releasePort(port) {
  usedPorts.delete(port);
}

function generateSessionId() {
  return crypto.randomBytes(16).toString('hex');
}

async function checkDocker() {
  try {
    await execPromise('docker info');
    return true;
  } catch {
    return false;
  }
}

async function pullImageIfNeeded() {
  try {
    const images = await execPromise(`docker images -q ${CONTAINER_IMAGE}`);
    if (!images) {
      console.log('Pulling VM image...');
      await execPromise(`docker pull ${CONTAINER_IMAGE}`, 300000);
    }
    return true;
  } catch (err) {
    console.error('Failed to pull image:', err.message);
    return false;
  }
}

async function waitForEmulator(vmId, maxWait = 180000) {
  const startTime = Date.now();
  const checkInterval = 3000;

  while (Date.now() - startTime < maxWait) {
    try {
      const result = await execPromise(`docker exec ${vmId} adb shell getprop sys.boot_completed 2>/dev/null || echo ""`);
      if (result.trim() === '1') {
        return true;
      }
    } catch {}
    await new Promise(resolve => setTimeout(resolve, checkInterval));
  }
  return false;
}

async function waitForHealthy(vmId, port, maxWait = 60000) {
  const startTime = Date.now();
  const checkInterval = 1000;

  while (Date.now() - startTime < maxWait) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`, {
        method: 'HEAD',
        signal: AbortSignal.timeout(1000)
      });
      if (response.ok) {
        return true;
      }
    } catch {}
    await new Promise(resolve => setTimeout(resolve, checkInterval));
  }
  return false;
}

async function startVM(clientId) {
  if (!await checkDocker()) {
    return { success: false, error: 'Docker not available' };
  }

  const existingSession = [...activeSessions.values()].find(s => s.clientId === clientId);
  if (existingSession) {
    return {
      success: true,
      vmId: existingSession.vmId,
      sessionId: existingSession.sessionId,
      vncPort: existingSession.vncPort,
      timeRemaining: Math.max(0, SESSION_TIMEOUT - (Date.now() - existingSession.startTime))
    };
  }

  if (activeSessions.size >= MAX_VMS) {
    return { success: false, error: 'Maximum VM limit reached. Please try again later.' };
  }

  let vncPort = await getAvailablePort();
  if (!vncPort) {
    return { success: false, error: 'No available ports' };
  }

  await pullImageIfNeeded();

  const vmId = `void-vm-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
  const sessionId = generateSessionId();

  try {
    const containerCmd = [
      'docker', 'run', '-d',
      '--name', vmId,
      '--privileged',
      '--device=/dev/kvm',
      '--memory=6g',
      '--cpus=6',
      '--shm-size=2g',
      '-p', `${vncPort}:6080`,
      '-e', 'WEB_VNC=true',
      '-e', 'APPIUM=false',
      CONTAINER_IMAGE
    ];

    await execPromise(containerCmd.join(' '));
    console.log(`VM container created: ${vmId} on port ${vncPort}`);

    console.log('Waiting for Android emulator to boot (this takes 1-2 minutes)...');

    const isHealthy = await waitForHealthy(vmId, vncPort, 30000);
    if (isHealthy) {
      console.log(`Web interface ready: ${vmId}`);
    }

    const emulatorBooted = await waitForEmulator(vmId, 90000);
    if (emulatorBooted) {
      console.log(`Android emulator booted: ${vmId}`);
    } else {
      console.log(`Emulator boot timeout, continuing: ${vmId}`);
    }

    const session = {
      vmId,
      sessionId,
      clientId,
      vncPort,
      startTime: Date.now(),
      timeoutId: null
    };

    session.timeoutId = setTimeout(() => {
      stopVM(vmId);
    }, SESSION_TIMEOUT);

    activeSessions.set(vmId, session);

    console.log(`VM started: ${vmId} on port ${vncPort}`);

    return {
      success: true,
      vmId,
      sessionId,
      vncPort,
      timeRemaining: SESSION_TIMEOUT
    };

  } catch (err) {
    releasePort(vncPort);
    try {
      await execPromise(`docker rm -f ${vmId}`);
    } catch {}
    console.error('Failed to start VM:', err.message);
    return { success: false, error: 'Failed to start VM' };
  }
}

async function stopVM(vmId) {
  const session = activeSessions.get(vmId);
  if (!session) {
    return { success: false, error: 'VM not found' };
  }

  if (session.timeoutId) {
    clearTimeout(session.timeoutId);
  }

  try {
    await execPromise(`docker stop ${vmId}`);
    await execPromise(`docker rm ${vmId}`);
  } catch (err) {
    console.error('Error stopping container:', err.message);
  }

  releasePort(session.vncPort);
  activeSessions.delete(vmId);

  console.log(`VM stopped: ${vmId}`);

  return { success: true, message: 'VM stopped' };
}

function getVMStatus(vmId) {
  const session = activeSessions.get(vmId);
  if (!session) {
    return { exists: false };
  }

  const elapsed = Date.now() - session.startTime;
  return {
    exists: true,
    vmId: session.vmId,
    vncPort: session.vncPort,
    timeRemaining: Math.max(0, SESSION_TIMEOUT - elapsed),
    startTime: session.startTime
  };
}

function getActiveVMCount() {
  return activeSessions.size;
}

function initializeVMWebSocket(server) {
  const wss = new WebSocketServer({ noServer: true });

  wss.on('connection', (ws, req) => {
    const urlParts = req.url.split('/');
    const vmId = urlParts[2];
    const session = activeSessions.get(vmId);

    if (!session) {
      ws.close(1008, 'VM not found');
      return;
    }

    const statusInterval = setInterval(() => {
      if (ws.readyState === ws.OPEN) {
        const status = getVMStatus(vmId);
        ws.send(JSON.stringify({
          type: 'status',
          ...status
        }));
      }
    }, 5000);

    ws.on('close', () => {
      clearInterval(statusInterval);
    });

    ws.on('message', (data) => {
      try {
        const msg = JSON.parse(data);
        if (msg.type === 'keepalive') {
          ws.send(JSON.stringify({ type: 'ack' }));
        } else if (msg.type === 'stop') {
          stopVM(vmId);
          ws.close(1000, 'VM stopped by user');
        }
      } catch {}
    });

    ws.send(JSON.stringify({
      type: 'connected',
      vmId: session.vmId,
      vncPort: session.vncPort,
      timeRemaining: SESSION_TIMEOUT - (Date.now() - session.startTime)
    }));
  });

  return wss;
}

async function cleanupAllVMs() {
  const promises = [];
  for (const [vmId] of activeSessions) {
    promises.push(stopVM(vmId));
  }
  await Promise.all(promises);
}

process.on('SIGINT', async () => {
  await cleanupAllVMs();
});

process.on('SIGTERM', async () => {
  await cleanupAllVMs();
});

export {
  startVM,
  stopVM,
  getVMStatus,
  getActiveVMCount,
  initializeVMWebSocket,
  cleanupAllVMs
};
