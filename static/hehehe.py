#!/usr/bin/env python3

import subprocess
import sys
import time
import os
import urllib.request
import zipfile
import shutil
import tempfile

class ChromeAutomation:
    def __init__(self):
        self.display = ':1'
        os.environ['DISPLAY'] = self.display
        self.fullscreen_lost_time = None
        self.shutdown_countdown_active = False
        
    def log(self, message):
        print(f"[INFO] {message}")
        
    def run_command(self, cmd, description="", silent=False):
        if not silent:
            self.log(f"{description}")
        try:
            result = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=60)
            if result.returncode == 0:
                if not silent:
                    self.log(f"SUCCESS: {description}")
                return True
            else:
                if not silent:
                    self.log(f"FAILED: {description} - {result.stderr[:100]}")
                return False
        except Exception as e:
            if not silent:
                self.log(f"ERROR: {description} - {e}")
            return False

    def install_system_dependencies(self):
        self.log("Installing system dependencies with multiple fallback methods...")
        
        # Method 1: Standard apt installation
        packages = [
            "wget", "curl", "unzip", "python3-pip", "xvfb", "xdotool",
            "fonts-liberation", "libasound2", "libatk-bridge2.0-0", 
            "libdrm2", "libxcomposite1", "libxdamage1", "libxrandr2",
            "libgbm1", "libxss1", "libnss3"
        ]
        
        methods = [
            f"apt update -qq && apt install -y {' '.join(packages)}",
            f"apt-get update -qq && apt-get install -y {' '.join(packages)}",
            "apt update && apt install -y wget curl unzip python3-pip",
            "yum install -y wget curl unzip python3-pip",
            "dnf install -y wget curl unzip python3-pip"
        ]
        
        for i, method in enumerate(methods, 1):
            self.log(f"Trying installation method {i}...")
            if self.run_command(method, f"System packages (method {i})", silent=True):
                return True
                
        self.log("All system installation methods failed, continuing anyway...")
        return False

    def install_python_dependencies(self):
        self.log("Installing Python dependencies with fallback methods...")
        
        pip_methods = [
            "python3 -m pip install selenium webdriver-manager --break-system-packages --no-warn-script-location",
            "pip3 install selenium webdriver-manager --break-system-packages --no-warn-script-location",
            "python3 -m pip install selenium webdriver-manager --user --no-warn-script-location",
            "pip install selenium webdriver-manager --user",
            "python -m pip install selenium webdriver-manager --user"
        ]
        
        for i, method in enumerate(pip_methods, 1):
            self.log(f"Trying pip method {i}...")
            if self.run_command(method, f"Python packages (method {i})", silent=True):
                # Test if import works
                try:
                    import selenium
                    from webdriver_manager.chrome import ChromeDriverManager
                    self.log("Python dependencies verified!")
                    return True
                except ImportError:
                    continue
                    
        # Fallback: manual installation
        self.log("Attempting manual dependency installation...")
        try:
            # Download and install pip if needed
            if not self.run_command("which pip3", silent=True):
                self.log("Installing pip manually...")
                urllib.request.urlretrieve("https://bootstrap.pypa.io/get-pip.py", "/tmp/get-pip.py")
                self.run_command("python3 /tmp/get-pip.py --user")
            
            # Try installing packages one by one
            for package in ["selenium", "webdriver-manager"]:
                self.run_command(f"python3 -m pip install {package} --user --no-warn-script-location")
                
        except Exception as e:
            self.log(f"Manual installation failed: {e}")
            
        return False

    def install_chrome(self):
        self.log("Installing Google Chrome/Chromium with multiple methods...")
        
        # Method 1: Official Chrome
        chrome_methods = [
            """
            wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && 
            echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && 
            apt update -qq && 
            apt install -y google-chrome-stable
            """,
            
            # Method 2: Chromium
            "apt update -qq && apt install -y chromium-browser",
            "apt update -qq && apt install -y chromium",
            "yum install -y chromium",
            "dnf install -y chromium",
            
            # Method 3: Manual Chrome download
            """
            cd /tmp && 
            wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && 
            dpkg -i google-chrome-stable_current_amd64.deb || apt-get install -f -y
            """
        ]
        
        for i, method in enumerate(chrome_methods, 1):
            self.log(f"Trying Chrome installation method {i}...")
            if self.run_command(method.strip().replace('\n', ' '), f"Chrome method {i}", silent=True):
                # Verify installation
                chrome_paths = [
                    "/usr/bin/google-chrome",
                    "/usr/bin/google-chrome-stable", 
                    "/usr/bin/chromium-browser",
                    "/usr/bin/chromium",
                    "/opt/google/chrome/chrome"
                ]
                
                for path in chrome_paths:
                    if os.path.exists(path):
                        self.log(f"Chrome/Chromium found at: {path}")
                        return path
                        
        self.log("Chrome installation failed, trying portable version...")
        return self.install_portable_chrome()
        
    def install_portable_chrome(self):
        self.log("Installing portable Chrome...")
        try:
            # Create chrome directory
            chrome_dir = "/opt/chrome"
            os.makedirs(chrome_dir, exist_ok=True)
            
            # Download portable chrome
            chrome_url = "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb"
            chrome_file = "/tmp/chrome.deb"
            
            self.log("Downloading Chrome...")
            urllib.request.urlretrieve(chrome_url, chrome_file)
            
            # Extract deb file manually
            self.run_command(f"ar x {chrome_file} data.tar.xz", silent=True)
            self.run_command(f"tar -xf data.tar.xz -C {chrome_dir} --strip-components=4 ./opt/google/chrome/", silent=True)
            
            chrome_binary = f"{chrome_dir}/chrome"
            if os.path.exists(chrome_binary):
                os.chmod(chrome_binary, 0o755)
                self.log(f"Portable Chrome installed at: {chrome_binary}")
                return chrome_binary
                
        except Exception as e:
            self.log(f"Portable Chrome installation failed: {e}")
            
        return None

    def setup_chrome_driver(self):
        self.log("Setting up ChromeDriver...")
        
        try:
            from webdriver_manager.chrome import ChromeDriverManager
            driver_path = ChromeDriverManager().install()
            self.log(f"ChromeDriver installed at: {driver_path}")
            return driver_path
        except:
            self.log("WebDriver Manager failed, trying manual installation...")
            return self.install_chromedriver_manually()
            
    def install_chromedriver_manually(self):
        self.log("Installing ChromeDriver manually...")
        try:
            # Get latest version
            import json
            version_url = "https://chromedriver.storage.googleapis.com/LATEST_RELEASE"
            version = urllib.request.urlopen(version_url).read().decode().strip()
            
            # Download ChromeDriver
            driver_url = f"https://chromedriver.storage.googleapis.com/{version}/chromedriver_linux64.zip"
            driver_zip = "/tmp/chromedriver.zip"
            
            urllib.request.urlretrieve(driver_url, driver_zip)
            
            # Extract
            with zipfile.ZipFile(driver_zip, 'r') as zip_ref:
                zip_ref.extract('chromedriver', '/usr/local/bin/')
                
            os.chmod('/usr/local/bin/chromedriver', 0o755)
            self.log("ChromeDriver installed manually")
            return '/usr/local/bin/chromedriver'
            
        except Exception as e:
            self.log(f"Manual ChromeDriver installation failed: {e}")
            return None

    def setup_selenium_chrome(self, chrome_binary, driver_path):
        self.log("Setting up Selenium with Chrome...")
        
        try:
            from selenium import webdriver
            from selenium.webdriver.chrome.service import Service
            from selenium.webdriver.chrome.options import Options
            from selenium.webdriver.common.by import By
            
            options = Options()
            
            # Chrome options for Docker/headless environment with kiosk mode
            options.add_argument('--no-sandbox')
            options.add_argument('--disable-dev-shm-usage')
            options.add_argument('--disable-gpu')
            options.add_argument('--remote-debugging-port=9222')
            options.add_argument('--disable-extensions')
            options.add_argument('--disable-plugins')
            options.add_argument('--disable-images')
            options.add_argument('--disable-javascript-harmony-shipping')
            options.add_argument('--disable-xss-auditor')
            options.add_argument('--disable-bundled-ppapi-flash')
            options.add_argument('--disable-plugins-discovery')
            options.add_argument('--disable-preconnect')
            options.add_argument('--disable-sync')
            options.add_argument('--window-size=1920,1080')
            options.add_argument('--kiosk')  # Kiosk mode
            options.add_argument('--disable-infobars')
            options.add_argument('--disable-session-crashed-bubble')
            options.add_argument('--disable-restore-session-state')
            
            # Set binary location if provided
            if chrome_binary:
                options.binary_location = chrome_binary
                
            # Set up service
            if driver_path:
                service = Service(driver_path)
                driver = webdriver.Chrome(service=service, options=options)
            else:
                driver = webdriver.Chrome(options=options)
                
            self.log("Chrome driver successfully created!")
            return driver
            
        except Exception as e:
            self.log(f"Chrome setup failed: {e}")
            return None

    def wait_for_game_content(self, driver, max_wait=30):
        """Wait for the game content to fully load before proceeding"""
        self.log("Waiting for game content to load...")
        
        start_time = time.time()
        while time.time() - start_time < max_wait:
            try:
                # Check if game content is present
                game_loaded = driver.execute_script("""
                    // Look for common game container indicators
                    var gameContainer = document.querySelector('canvas') || 
                                      document.querySelector('iframe') ||
                                      document.querySelector('[id*="game"]') ||
                                      document.querySelector('[class*="game"]') ||
                                      document.querySelector('embed') ||
                                      document.querySelector('object');
                    
                    // Check if the play button is gone (indicating game started)
                    var playButton = document.querySelector('#ng-play-browser-btn');
                    var playButtonGone = !playButton || playButton.style.display === 'none';
                    
                    // Check for loading indicators being gone
                    var loadingGone = !document.querySelector('[class*="loading"]') && 
                                     !document.querySelector('[id*="loading"]');
                    
                    return gameContainer && playButtonGone && loadingGone;
                """)
                
                if game_loaded:
                    self.log("Game content detected as loaded")
                    return True
                    
                time.sleep(1)
                
            except Exception as e:
                self.log(f"Error checking game load status: {e}")
                time.sleep(1)
        
        self.log("Game content wait timeout - proceeding anyway")
        return False

    def create_loading_screen(self, driver):
        """Create a fullscreen loading overlay"""
        self.log("Creating loading screen overlay...")
        
        try:
            driver.execute_script("""
                // Create loading overlay
                var loadingOverlay = document.createElement('div');
                loadingOverlay.id = 'kiosk-loading-overlay';
                loadingOverlay.innerHTML = `
                    <div style="
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background: linear-gradient(135deg, #1e3c72, #2a5298);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        z-index: 999999;
                        font-family: Arial, sans-serif;
                        color: white;
                    ">
                        <div style="
                            width: 80px;
                            height: 80px;
                            border: 4px solid #ffffff30;
                            border-top: 4px solid #ffffff;
                            border-radius: 50%;
                            animation: spin 1s linear infinite;
                            margin-bottom: 30px;
                        "></div>
                        <h1 style="
                            font-size: 2.5em;
                            margin: 0 0 20px 0;
                            text-align: center;
                            font-weight: 300;
                            letter-spacing: 2px;
                        ">Loading Game</h1>
                        <p style="
                            font-size: 1.2em;
                            margin: 0;
                            opacity: 0.8;
                            text-align: center;
                        ">Preparing your gaming experience...</p>
                        <div style="
                            position: absolute;
                            bottom: 30px;
                            font-size: 0.9em;
                            opacity: 0.6;
                        ">Please wait while we optimize the interface</div>
                    </div>
                `;
                
                // Add CSS animation
                var style = document.createElement('style');
                style.textContent = `
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `;
                document.head.appendChild(style);
                
                // Insert the overlay
                document.body.appendChild(loadingOverlay);
                console.log('Loading screen created successfully');
            """)
            self.log("Loading screen created successfully")
            return True
        except Exception as e:
            self.log(f"Error creating loading screen: {e}")
            return False

    def remove_loading_screen(self, driver):
        """Remove the loading screen overlay"""
        self.log("Removing loading screen...")
        
        try:
            driver.execute_script("""
                var overlay = document.getElementById('kiosk-loading-overlay');
                if (overlay) {
                    overlay.style.transition = 'opacity 0.5s ease-out';
                    overlay.style.opacity = '0';
                    setTimeout(function() {
                        overlay.remove();
                        console.log('Loading screen removed');
                    }, 500);
                }
            """)
            self.log("Loading screen removal initiated")
            time.sleep(1)  # Wait for fade animation
            return True
        except Exception as e:
            self.log(f"Error removing loading screen: {e}")
            return False

    def smart_element_removal(self, driver):
        """Aggressively remove UI elements with persistent retry until successful"""
        self.log("Starting aggressive element removal with persistent retry...")
        
        # Define all elements to remove with their selectors
        elements_to_remove = [
            '#top-bar-list',
            'header',
            '.back-btn',
            'button.sc-90a29998-1.sc-3101fa9e-0.dauFpG.YJWEt.back-btn',
            '.record-screen',
            '#ng-record-screen',
            'div.sc-90a29998-8.cpzVSH',
            '.mouse-sensitivity',
            '#ng-controls',
            'button#ng-controls.sc-90a29998-1.kOIDIn',
            '#ng-sound',
            'button#ng-sound.sc-90a29998-1.sc-90a29998-4.dauFpG.bUKwYF',
            'div.xES0bjZoI7ksV3Oz',
            'div.sc-90a29998-7.goiiWU',
            '.sc-65c72e71-0.jXDDx5',
            '#anahandler',
            'button#ng-support',
            'button.sc-404ed2b-0.sc-70480f5a-1.cUATGy.bFyrIj',
            '.sc-dd60fb6a-1.czjyhF',
            '.sc-f298c76e-0.coiLQT',
            '.sc-7b88b718-2.iMJCzE',
            '.sc-e0e672b6-0.kCWpEy',
            '.sc-dd60fb6a-0.cVftFf.recordIcon',
            '.sc-f298c76e-1.iDlfSc',
            '.sc-f298c76e-2.iXpsPg',
            '.sc-f298c76e-3.huBExg',
            '.sc-f298c76e-4.dIJxXF',
            '.sc-e0e672b6-1.ecyCeO',
            '#ng-control-bar',
            '.sc-6d8b99af-0.dzEzHW.footer',
            '.sc-6d8b99af-0.dzEzHW',
            '.sc-6d8b99af-3.UCGsH',
            '#ng-fs',
            'button#ng-fs.sc-90a29998-1.dauFpG',
            '.sc-3c372983-27.DeUzz'
        ]
        
        attempt = 0
        total_removed = 0
        
        while True:
            attempt += 1
            self.log(f"Element removal attempt {attempt}...")
            
            try:
                result = driver.execute_script("""
                    var selectors = arguments[0];
                    var removedCount = 0;
                    var remainingElements = 0;
                    
                    // Aggressive removal function - same method for all elements
                    function aggressiveRemove(selector) {
                        try {
                            var elements = document.querySelectorAll(selector);
                            var localRemoved = 0;
                            
                            elements.forEach(function(el) {
                                // Skip the loading overlay
                                if (el.id === 'kiosk-loading-overlay') {
                                    return;
                                }
                                
                                // Check if element contains game content
                                var hasGameContent = el.querySelector('canvas') || 
                                                   el.querySelector('iframe') || 
                                                   el.querySelector('embed') ||
                                                   el.querySelector('object');
                                
                                if (!hasGameContent) {
                                    // Method 1: Complete removal
                                    try {
                                        el.remove();
                                        localRemoved++;
                                        console.log('REMOVED element with selector:', selector);
                                    } catch(e1) {
                                        // Method 2: Aggressive hiding if removal fails
                                        try {
                                            el.style.display = 'none';
                                            el.style.visibility = 'hidden';
                                            el.style.opacity = '0';
                                            el.style.pointerEvents = 'none';
                                            el.style.position = 'absolute';
                                            el.style.left = '-9999px';
                                            el.style.top = '-9999px';
                                            el.style.width = '0';
                                            el.style.height = '0';
                                            el.style.overflow = 'hidden';
                                            el.style.zIndex = '-9999';
                                            localRemoved++;
                                            console.log('HIDDEN element with selector:', selector);
                                        } catch(e2) {
                                            // Method 3: Content destruction
                                            try {
                                                el.innerHTML = '';
                                                el.textContent = '';
                                                el.style.cssText = 'display:none!important;visibility:hidden!important;opacity:0!important;';
                                                localRemoved++;
                                                console.log('DESTROYED content of element with selector:', selector);
                                            } catch(e3) {
                                                console.log('Failed to remove element with selector:', selector, e3);
                                            }
                                        }
                                    }
                                } else {
                                    console.log('Skipped element with game content:', selector);
                                }
                            });
                            
                            return localRemoved;
                        } catch (e) {
                            console.log('Error processing selector:', selector, e);
                            return 0;
                        }
                    }
                    
                    // Remove each element type
                    selectors.forEach(function(selector) {
                        removedCount += aggressiveRemove(selector);
                    });
                    
                    // Check for remaining elements (excluding loading overlay)
                    selectors.forEach(function(selector) {
                        var remaining = document.querySelectorAll(selector);
                        var filteredRemaining = Array.from(remaining).filter(function(el) {
                            return el.id !== 'kiosk-loading-overlay';
                        });
                        if (filteredRemaining.length > 0) {
                            remainingElements += filteredRemaining.length;
                            console.log('Still found', filteredRemaining.length, 'elements for selector:', selector);
                        }
                    });
                    
                    return {
                        removed: removedCount,
                        remaining: remainingElements
                    };
                """, elements_to_remove)
                
                removed_count = result['removed']
                remaining_count = result['remaining']
                total_removed += removed_count
                
                if removed_count > 0:
                    self.log(f"Removed {removed_count} elements in attempt {attempt}")
                
                if remaining_count == 0:
                    self.log(f"SUCCESS: All target elements removed after {attempt} attempts!")
                    # ACTIVATE NAVIGATION LOCK AFTER SUCCESSFUL ELEMENT REMOVAL
                    self.activate_navigation_lock(driver)
                    break
                else:
                    self.log(f"Still {remaining_count} elements remaining, retrying immediately...")
                    # No sleep - continue immediately
                    
            except Exception as e:
                self.log(f"Error during element removal attempt {attempt}: {e}")
                # No sleep - continue immediately even on error
        
        # Apply aggressive CSS to ensure elements stay gone
        try:
            driver.execute_script("""
                // Apply nuclear CSS to ensure elements stay hidden
                var style = document.createElement('style');
                style.id = 'nuclear-kiosk-cleanup';
                style.textContent = `
                    /* Nuclear option - hide everything we don't want */
                    #top-bar-list,
                    header,
                    .back-btn,
                    button.sc-90a29998-1.sc-3101fa9e-0.dauFpG.YJWEt.back-btn,
                    .record-screen,
                    #ng-record-screen,
                    div.sc-90a29998-8.cpzVSH,
                    .mouse-sensitivity,
                    #ng-controls,
                    button#ng-controls.sc-90a29998-1.kOIDIn,
                    #ng-sound,
                    button#ng-sound.sc-90a29998-1.sc-90a29998-4.dauFpG.bUKwYF,
                    div.xES0bjZoI7ksV3Oz,
                    div.sc-90a29998-7.goiiWU,
                    .sc-65c72e71-0.jXDDx5,
                    #anahandler,
                    button#ng-support,
                    button.sc-404ed2b-0.sc-70480f5a-1.cUATGy.bFyrIj,
                    .sc-dd60fb6a-1.czjyhF,
                    .sc-f298c76e-0.coiLQT,
                    .sc-7b88b718-2.iMJCzE,
                    .sc-e0e672b6-0.kCWpEy,
                    .sc-dd60fb6a-0.cVftFf.recordIcon,
                    .sc-f298c76e-1.iDlfSc,
                    .sc-f298c76e-2.iXpsPg,
                    .sc-f298c76e-3.huBExg,
                    .sc-f298c76e-4.dIJxXF,
                    .sc-e0e672b6-1.ecyCeO,
                    #ng-control-bar,
                    .sc-6d8b99af-0.dzEzHW.footer,
                    .sc-6d8b99af-0.dzEzHW,
                    .sc-6d8b99af-3.UCGsH,
                    #ng-fs,
                    button#ng-fs.sc-90a29998-1.dauFpG,
                    .sc-3c372983-27.DeUzz {
                        display: none !important;
                        visibility: hidden !important;
                        opacity: 0 !important;
                        pointer-events: none !important;
                        position: absolute !important;
                        left: -99999px !important;
                        top: -99999px !important;
                        width: 0 !important;
                        height: 0 !important;
                        overflow: hidden !important;
                        z-index: -99999 !important;
                    }
                    
                    /* Clean layout */
                    body { 
                        margin: 0 !important; 
                        padding: 0 !important; 
                        overflow: hidden !important;
                    }
                    html { 
                        margin: 0 !important; 
                        padding: 0 !important; 
                    }
                    
                    /* Ensure game content takes full space */
                    canvas, iframe, embed, object {
                        position: fixed !important;
                        top: 0 !important;
                        left: 0 !important;
                        width: 100vw !important;
                        height: 100vh !important;
                        z-index: 9999 !important;
                    }
                `;
                
                // Remove existing style if present
                var existingStyle = document.getElementById('nuclear-kiosk-cleanup');
                if (existingStyle) {
                    existingStyle.remove();
                }
                
                document.head.appendChild(style);
                console.log('Applied nuclear kiosk cleanup CSS');
            """)
            self.log("Applied nuclear CSS cleanup successfully")
        except Exception as e:
            self.log(f"Error applying nuclear CSS: {e}")
        
        self.log(f"Element removal completed. Total elements processed: {total_removed}")
        return total_removed > 0

    def activate_navigation_lock(self, driver):
        """Activate navigation lock to prevent leaving the current page"""
        self.log("ACTIVATING NAVIGATION LOCK - No navigation will be allowed!")
        
        try:
            driver.execute_script("""
                // Store the current URL as the only allowed URL
                window.KIOSK_LOCKED_URL = window.location.href;
                window.KIOSK_LOCK_ACTIVE = true;
                
                console.log('Navigation lock activated for URL:', window.KIOSK_LOCKED_URL);
                
                // Override all navigation methods
                
                // 1. Override window.location
                Object.defineProperty(window, 'location', {
                    configurable: false,
                    enumerable: true,
                    get: function() {
                        return document.location;
                    },
                    set: function(value) {
                        console.log('BLOCKED: Navigation attempt to', value);
                        return false;
                    }
                });
                
                // 2. Override location methods
                var originalAssign = window.location.assign;
                window.location.assign = function(url) {
                    console.log('BLOCKED: location.assign to', url);
                    return false;
                };
                
                var originalReplace = window.location.replace;
                window.location.replace = function(url) {
                    console.log('BLOCKED: location.replace to', url);
                    return false;
                };
                
                var originalReload = window.location.reload;
                window.location.reload = function() {
                    console.log('BLOCKED: location.reload');
                    return false;
                };
                
                // 3. Override href setter
                Object.defineProperty(window.location, 'href', {
                    configurable: false,
                    enumerable: true,
                    get: function() {
                        return window.KIOSK_LOCKED_URL;
                    },
                    set: function(value) {
                        console.log('BLOCKED: href change to', value);
                        return false;
                    }
                });
                
                // 4. Intercept all link clicks
                document.addEventListener('click', function(e) {
                    if (!window.KIOSK_LOCK_ACTIVE) return;
                    
                    var target = e.target;
                    while (target && target !== document.body) {
                        if (target.tagName === 'A' || target.hasAttribute('href')) {
                            e.preventDefault();
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                            console.log('BLOCKED: Link click on', target.href || target);
                            return false;
                        }
                        target = target.parentElement;
                    }
                }, true);
                
                // 5. Override window.open
                window.open = function() {
                    console.log('BLOCKED: window.open attempt');
                    return null;
                };
                
                // 6. Intercept form submissions
                document.addEventListener('submit', function(e) {
                    if (!window.KIOSK_LOCK_ACTIVE) return;
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    console.log('BLOCKED: Form submission');
                    return false;
                }, true);
                
                // 7. Override history methods
                window.history.pushState = function() {
                    console.log('BLOCKED: history.pushState');
                    return false;
                };
                
                window.history.replaceState = function() {
                    console.log('BLOCKED: history.replaceState');
                    return false;
                };
                
                window.history.back = function() {
                    console.log('BLOCKED: history.back');
                    return false;
                };
                
                window.history.forward = function() {
                    console.log('BLOCKED: history.forward');
                    return false;
                };
                
                window.history.go = function() {
                    console.log('BLOCKED: history.go');
                    return false;
                };
                
                // 8. Block navigation via meta refresh
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.type === 'childList') {
                            mutation.addedNodes.forEach(function(node) {
                                if (node.tagName === 'META' && node.httpEquiv === 'refresh') {
                                    node.remove();
                                    console.log('BLOCKED: Meta refresh tag');
                                }
                            });
                        }
                    });
                });
                
                observer.observe(document.head, { childList: true });
                
                // 9. Prevent navigation through iframe manipulation
                function blockIframeNavigation() {
                    var iframes = document.querySelectorAll('iframe');
                    iframes.forEach(function(iframe) {
                        try {
                            // Block iframe src changes
                            Object.defineProperty(iframe, 'src', {
                                configurable: false,
                                enumerable: true,
                                get: function() {
                                    return iframe.getAttribute('src');
                                },
                                set: function(value) {
                                    console.log('BLOCKED: iframe src change to', value);
                                    return false;
                                }
                            });
                            
                            // Also try to access iframe content if same-origin
                            if (iframe.contentWindow) {
                                iframe.contentWindow.location.assign = function() {
                                    console.log('BLOCKED: iframe navigation');
                                    return false;
                                };
                                iframe.contentWindow.location.replace = function() {
                                    console.log('BLOCKED: iframe navigation');
                                    return false;
                                };
                            }
                        } catch (e) {
                            // Cross-origin iframe, can't access but src is still blocked
                        }
                    });
                }
                
                // Apply iframe blocking initially and on DOM changes
                blockIframeNavigation();
                setInterval(blockIframeNavigation, 1000);
                
                // 10. Block programmatic navigation attempts
                var originalCreateElement = document.createElement;
                document.createElement = function(tagName) {
                    var element = originalCreateElement.call(document, tagName);
                    
                    if (tagName.toLowerCase() === 'a') {
                        // Override click method for dynamically created links
                        element.click = function() {
                            console.log('BLOCKED: Dynamic link click');
                            return false;
                        };
                    }
                    
                    return element;
                };
                
                // 11. Prevent navigation through XMLHttpRequest that might redirect
                var originalXHROpen = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function(method, url) {
                    // Allow same-origin requests but log them
                    if (url && !url.startsWith(window.location.origin)) {
                        console.log('WARNING: Cross-origin XHR to', url);
                    }
                    return originalXHROpen.apply(this, arguments);
                };
                
                // 12. Block fetch requests that might cause navigation
                var originalFetch = window.fetch;
                window.fetch = function(url) {
                    // Allow same-origin requests but log them
                    if (url && typeof url === 'string' && !url.startsWith(window.location.origin)) {
                        console.log('WARNING: Cross-origin fetch to', url);
                    }
                    return originalFetch.apply(this, arguments);
                };
                
                // 13. Prevent beforeunload and unload events from working
                window.addEventListener('beforeunload', function(e) {
                    if (window.KIOSK_LOCK_ACTIVE) {
                        e.preventDefault();
                        e.returnValue = '';
                        console.log('BLOCKED: beforeunload event');
                        return '';
                    }
                }, true);
                
                // 14. Block any attempts to change document.location
                Object.defineProperty(document, 'location', {
                    configurable: false,
                    enumerable: true,
                    get: function() {
                        return window.location;
                    },
                    set: function(value) {
                        console.log('BLOCKED: document.location change to', value);
                        return false;
                    }
                });
                
                // 15. Monitor and block any navigation attempts via popstate
                window.addEventListener('popstate', function(e) {
                    if (window.KIOSK_LOCK_ACTIVE && window.location.href !== window.KIOSK_LOCKED_URL) {
                        console.log('BLOCKED: popstate navigation');
                        window.history.pushState(null, '', window.KIOSK_LOCKED_URL);
                    }
                }, true);
                
                // 16. Final catch-all: Monitor URL changes
                setInterval(function() {
                    if (window.KIOSK_LOCK_ACTIVE && window.location.href !== window.KIOSK_LOCKED_URL) {
                        console.log('EMERGENCY: URL changed! Attempting to restore...');
                        try {
                            window.history.replaceState(null, '', window.KIOSK_LOCKED_URL);
                        } catch (e) {
                            console.log('Failed to restore URL');
                        }
                    }
                }, 100);
                
                console.log('NAVIGATION LOCK FULLY ACTIVATED - All navigation methods blocked');
                console.log('Locked to URL:', window.KIOSK_LOCKED_URL);
            """)
            
            self.log("Navigation lock successfully activated!")
            self.log("No links, buttons, or scripts can navigate away from the current page")
            return True
            
        except Exception as e:
            self.log(f"Error activating navigation lock: {e}")
            return False

    def continuous_element_monitoring(self, driver):
        """Continuously monitor for unwanted elements and remove them immediately"""
        self.log("Starting continuous element monitoring...")
        
        # Define elements to monitor
        elements_to_monitor = [
            '#top-bar-list',
            'header',
            '.back-btn',
            'button.sc-90a29998-1.sc-3101fa9e-0.dauFpG.YJWEt.back-btn',
            '.record-screen',
            '#ng-record-screen',
            'div.sc-90a29998-8.cpzVSH',
            '.mouse-sensitivity',
            '#ng-controls',
            'button#ng-controls.sc-90a29998-1.kOIDIn',
            '#ng-sound',
            'button#ng-sound.sc-90a29998-1.sc-90a29998-4.dauFpG.bUKwYF',
            'div.xES0bjZoI7ksV3Oz',
            'div.sc-90a29998-7.goiiWU',
            '.sc-65c72e71-0.jXDDx5',
            '#anahandler',
            'button#ng-support',
            'button.sc-404ed2b-0.sc-70480f5a-1.cUATGy.bFyrIj',
            '.sc-dd60fb6a-1.czjyhF',
            '.sc-f298c76e-0.coiLQT',
            '.sc-7b88b718-2.iMJCzE',
            '.sc-e0e672b6-0.kCWpEy',
            '.sc-dd60fb6a-0.cVftFf.recordIcon',
            '.sc-f298c76e-1.iDlfSc',
            '.sc-f298c76e-2.iXpsPg',
            '.sc-f298c76e-3.huBExg',
            '.sc-f298c76e-4.dIJxXF',
            '.sc-e0e672b6-1.ecyCeO',
            '#ng-control-bar',
            '.sc-6d8b99af-0.dzEzHW.footer',
            '.sc-6d8b99af-0.dzEzHW',
            '.sc-6d8b99af-3.UCGsH',
            '#ng-fs',
            'button#ng-fs.sc-90a29998-1.dauFpG',
            '.sc-3c372983-27.DeUzz'
        ]
        
        # Set up continuous monitoring script
        try:
            driver.execute_script("""
                var elementsToMonitor = arguments[0];
                
                // Create monitoring function
                function continuousMonitor() {
                    var removedCount = 0;
                    
                    elementsToMonitor.forEach(function(selector) {
                        try {
                            var elements = document.querySelectorAll(selector);
                            elements.forEach(function(el) {
                                // Skip loading overlay and elements with game content
                                if (el.id === 'kiosk-loading-overlay') return;
                                
                                var hasGameContent = el.querySelector('canvas') || 
                                                   el.querySelector('iframe') || 
                                                   el.querySelector('embed') ||
                                                   el.querySelector('object');
                                
                                if (!hasGameContent) {
                                    try {
                                        el.remove();
                                        removedCount++;
                                    } catch(e1) {
                                        try {
                                            el.style.display = 'none';
                                            el.style.visibility = 'hidden';
                                            el.style.opacity = '0';
                                            el.style.pointerEvents = 'none';
                                            el.style.position = 'absolute';
                                            el.style.left = '-9999px';
                                            el.style.top = '-9999px';
                                            el.style.width = '0';
                                            el.style.height = '0';
                                            el.style.overflow = 'hidden';
                                            el.style.zIndex = '-9999';
                                            removedCount++;
                                        } catch(e2) {
                                            try {
                                                el.innerHTML = '';
                                                el.textContent = '';
                                                el.style.cssText = 'display:none!important;visibility:hidden!important;opacity:0!important;';
                                                removedCount++;
                                            } catch(e3) {
                                                // Silent fail for continuous monitoring
                                            }
                                        }
                                    }
                                }
                            });
                        } catch(e) {
                            // Silent fail for continuous monitoring
                        }
                    });
                    
                    // Log only if elements were found and removed
                    if (removedCount > 0) {
                        console.log('Continuous monitor removed', removedCount, 'unwanted elements');
                    }
                }
                
                // Set up continuous monitoring every 500ms
                setInterval(continuousMonitor, 500);
                
                // Also monitor for DOM mutations
                var observer = new MutationObserver(function(mutations) {
                    var shouldCheck = false;
                    mutations.forEach(function(mutation) {
                        if (mutation.type === 'childList') {
                            shouldCheck = true;
                        }
                    });
                    
                    if (shouldCheck) {
                        setTimeout(continuousMonitor, 100);
                    }
                });
                
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
                
                console.log('Continuous element monitoring activated');
            """, elements_to_monitor)
            
            self.log("Continuous element monitoring activated successfully")
            return True
        except Exception as e:
            self.log(f"Error setting up continuous monitoring: {e}")
            return False

    def setup_kiosk_protection(self, driver):
        """Set up protection against tab closing and fullscreen exiting"""
        self.log("Setting up kiosk protection...")
        
        try:
            driver.execute_script("""
                // Prevent tab closing
                window.addEventListener('beforeunload', function(e) {
                    e.preventDefault();
                    e.returnValue = '';
                    return '';
                });
                
                // Disable common keyboard shortcuts
                document.addEventListener('keydown', function(e) {
                    // Prevent F11 (fullscreen toggle)
                    if (e.key === 'F11') {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                    
                    // Prevent Escape (exit fullscreen)
                    if (e.key === 'Escape' || e.keyCode === 27) {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                    
                    // Prevent Ctrl+W (close tab)
                    if (e.ctrlKey && e.key === 'w') {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                    
                    // Prevent Ctrl+T (new tab)
                    if (e.ctrlKey && e.key === 't') {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                    
                    // Prevent Ctrl+N (new window)
                    if (e.ctrlKey && e.key === 'n') {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                    
                    // Prevent Alt+F4 (close window)
                    if (e.altKey && e.key === 'F4') {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                    
                    // Prevent Ctrl+Shift+I (developer tools)
                    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                    
                    // Prevent F12 (developer tools)
                    if (e.key === 'F12') {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                    
                    // Prevent Ctrl+U (view source)
                    if (e.ctrlKey && e.key === 'u') {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                }, true);
                
                // Prevent right-click context menu
                document.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                    return false;
                });
                
                // Monitor fullscreen state changes
                document.addEventListener('fullscreenchange', function(e) {
                    if (!document.fullscreenElement) {
                        console.log('Fullscreen exited - will be restored by monitoring script');
                    }
                });
                
                // Prevent drag and drop
                document.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    return false;
                });
                
                document.addEventListener('drop', function(e) {
                    e.preventDefault();
                    return false;
                });
                
                // Override console methods to prevent debugging
                window.console = {
                    log: function() {},
                    warn: function() {},
                    error: function() {},
                    info: function() {},
                    debug: function() {}
                };
                
                console.log('Kiosk protection activated');
            """)
            
            self.log("Kiosk protection successfully set up")
            return True
            
        except Exception as e:
            self.log(f"Error setting up kiosk protection: {e}")
            return False

    def trigger_fullscreen_safely(self, driver):
        """Trigger fullscreen using the page's own fullscreen API if available"""
        self.log("Attempting to trigger fullscreen safely...")
        
        try:
            # Try to use the page's own fullscreen functionality first
            fullscreen_triggered = driver.execute_script("""
                // Try to find and click any existing fullscreen buttons
                var fullscreenButtons = document.querySelectorAll('[title*="fullscreen"], [title*="Fullscreen"], [class*="fullscreen"], [id*="fullscreen"]');
                for (var i = 0; i < fullscreenButtons.length; i++) {
                    try {
                        fullscreenButtons[i].click();
                        console.log('Clicked existing fullscreen button');
                        return true;
                    } catch (e) {
                        continue;
                    }
                }
                
                // Try to trigger fullscreen on the game element
                var gameElement = document.querySelector('canvas') || 
                                document.querySelector('iframe') ||
                                document.querySelector('embed') ||
                                document.querySelector('object') ||
                                document.body;
                
                if (gameElement && gameElement.requestFullscreen) {
                    gameElement.requestFullscreen().then(function() {
                        console.log('Successfully triggered fullscreen via game element');
                    }).catch(function(e) {
                        console.log('Fullscreen request failed:', e);
                    });
                    return true;
                } else if (gameElement && gameElement.webkitRequestFullscreen) {
                    gameElement.webkitRequestFullscreen();
                    console.log('Triggered webkit fullscreen');
                    return true;
                } else if (gameElement && gameElement.mozRequestFullScreen) {
                    gameElement.mozRequestFullScreen();
                    console.log('Triggered moz fullscreen');
                    return true;
                } else if (gameElement && gameElement.msRequestFullscreen) {
                    gameElement.msRequestFullscreen();
                    console.log('Triggered ms fullscreen');
                    return true;
                }
                
                return false;
            """)
            
            if fullscreen_triggered:
                self.log("Successfully triggered fullscreen via page API")
                time.sleep(2)
                return True
            else:
                self.log("Page fullscreen API not available, using Selenium fullscreen")
                driver.fullscreen_window()
                time.sleep(2)
                return True
                
        except Exception as e:
            self.log(f"Error triggering fullscreen: {e}")
            return False

    def shutdown_system(self):
        """Shutdown the system immediately"""
        self.log("CRITICAL: Initiating system shutdown due to fullscreen breach!")
        
        # Try multiple shutdown methods
        shutdown_commands = [
            "shutdown -h now",
            "systemctl poweroff",
            "halt -p",
            "poweroff",
            "init 0"
        ]
        
        for cmd in shutdown_commands:
            try:
                subprocess.run(cmd, shell=True, timeout=5)
                break
            except:
                continue
        
        # If all else fails, try to kill critical processes
        try:
            subprocess.run("killall -9 X Xorg lightdm gdm3 sddm", shell=True)
        except:
            pass

    def monitor_fullscreen_with_shutdown(self, driver):
        """Monitor fullscreen with 5-second shutdown protection"""
        self.log("Starting fullscreen monitoring with shutdown protection...")
        self.log("WARNING: System will shutdown if fullscreen cannot be maintained!")
        
        attempt = 0
        consecutive_failures = 0
        false_positive_count = 0
        
        while True:
            try:
                attempt += 1
                if attempt % 20 == 0:  # Log every 20th attempt to reduce spam
                    self.log(f"Fullscreen monitoring attempt {attempt}...")
                
                # Enhanced fullscreen detection
                fullscreen_status = driver.execute_script("""
                    // Multiple ways to check fullscreen
                    var isFullscreen = !!(document.fullscreenElement || 
                                         document.webkitFullscreenElement || 
                                         document.mozFullScreenElement || 
                                         document.msFullscreenElement);
                    
                    // Also check window dimensions as backup
                    var isWindowFullscreen = (window.innerHeight === screen.height && 
                                             window.innerWidth === screen.width);
                    
                    // Check if browser is in kiosk mode (Chrome specific)
                    var isKioskMode = window.navigator.userAgent.includes('Chrome') && 
                                     window.outerHeight === window.screen.height;
                    
                    return {
                        documentFullscreen: isFullscreen,
                        windowFullscreen: isWindowFullscreen,
                        kioskMode: isKioskMode,
                        windowHeight: window.innerHeight,
                        screenHeight: screen.height,
                        windowWidth: window.innerWidth,
                        screenWidth: screen.width
                    };
                """)
                
                # Consider fullscreen active if any method indicates it
                is_fullscreen = (fullscreen_status['documentFullscreen'] or 
                               fullscreen_status['windowFullscreen'] or 
                               fullscreen_status['kioskMode'])
                
                if not is_fullscreen:
                    false_positive_count += 1
                    
                    # Only start countdown after multiple consecutive failures to avoid false positives
                    if false_positive_count >= 3:
                        if self.fullscreen_lost_time is None:
                            self.fullscreen_lost_time = time.time()
                            self.log("ALERT: Fullscreen lost! Starting 5-second countdown...")
                            self.log(f"Status: doc={fullscreen_status['documentFullscreen']}, window={fullscreen_status['windowFullscreen']}, kiosk={fullscreen_status['kioskMode']}")
                            self.log(f"Dimensions: {fullscreen_status['windowWidth']}x{fullscreen_status['windowHeight']} vs {fullscreen_status['screenWidth']}x{fullscreen_status['screenHeight']}")
                            self.shutdown_countdown_active = True
                        
                        # Calculate how long fullscreen has been lost
                        lost_duration = time.time() - self.fullscreen_lost_time
                        remaining_time = 5.0 - lost_duration
                        
                        if remaining_time > 0:
                            self.log(f"COUNTDOWN: {remaining_time:.1f} seconds until shutdown - attempting fullscreen restore...")
                            
                            # Try multiple restore methods
                            restore_success = False
                            
                            # Method 1: Try page fullscreen API
                            try:
                                page_restore = driver.execute_script("""
                                    var gameElement = document.querySelector('canvas') || 
                                                    document.querySelector('iframe') ||
                                                    document.querySelector('embed') ||
                                                    document.querySelector('object') ||
                                                    document.body;
                                    
                                    if (gameElement && gameElement.requestFullscreen) {
                                        gameElement.requestFullscreen();
                                        return true;
                                    }
                                    return false;
                                """)
                                if page_restore:
                                    restore_success = True
                                    self.log("Attempted page API fullscreen restore")
                            except:
                                pass
                            
                            # Method 2: Selenium fullscreen
                            if not restore_success:
                                try:
                                    driver.fullscreen_window()
                                    restore_success = True
                                    self.log("Attempted Selenium fullscreen restore")
                                except:
                                    pass
                            
                            # Method 3: Maximize as fallback
                            if not restore_success:
                                try:
                                    driver.maximize_window()
                                    self.log("Attempted window maximize as fallback")
                                except:
                                    pass
                            
                            # Check if any restore method worked
                            time.sleep(1)  # Wait for fullscreen to activate
                            new_status = driver.execute_script("""
                                var isFullscreen = !!(document.fullscreenElement || 
                                                     document.webkitFullscreenElement || 
                                                     document.mozFullScreenElement || 
                                                     document.msFullscreenElement);
                                var isWindowFullscreen = (window.innerHeight === screen.height && 
                                                         window.innerWidth === screen.width);
                                var isKioskMode = window.navigator.userAgent.includes('Chrome') && 
                                                 window.outerHeight === window.screen.height;
                                return isFullscreen || isWindowFullscreen || isKioskMode;
                            """)
                            
                            if new_status:
                                self.log("SUCCESS: Fullscreen restored!")
                                self.fullscreen_lost_time = None
                                self.shutdown_countdown_active = False
                                consecutive_failures = 0
                                false_positive_count = 0
                            else:
                                consecutive_failures += 1
                                self.log(f"FAILED: Fullscreen restore attempt {consecutive_failures}")
                        else:
                            self.log("CRITICAL: 5-second timeout exceeded! Initiating system shutdown...")
                            self.shutdown_system()
                            break
                    else:
                        self.log(f"Potential fullscreen loss detected ({false_positive_count}/3) - verifying...")
                        time.sleep(1)  # Short wait before rechecking
                else:
                    # Fullscreen is active
                    if self.shutdown_countdown_active:
                        self.log("SUCCESS: Fullscreen restored before shutdown!")
                        self.shutdown_countdown_active = False
                    
                    self.fullscreen_lost_time = None
                    consecutive_failures = 0
                    false_positive_count = 0
                    time.sleep(2)  # Check every 2 seconds when in fullscreen
                    
            except KeyboardInterrupt:
                self.log("Interrupted by user - stopping fullscreen monitoring...")
                break
            except Exception as e:
                if attempt % 30 == 0:  # Log errors occasionally
                    self.log(f"Error during fullscreen monitoring on attempt {attempt}: {e}")
                time.sleep(1)  # Continue monitoring on error

    def run_automation(self):
        self.log("Starting complete Chrome automation with advanced kiosk mode...")
        
        # Step 1: Install dependencies
        self.log("=== STEP 1: Installing Dependencies ===")
        self.install_system_dependencies()
        self.install_python_dependencies()
        
        # Step 2: Install Chrome
        self.log("=== STEP 2: Installing Chrome ===")
        chrome_binary = self.install_chrome()
        
        # Step 3: Setup ChromeDriver
        self.log("=== STEP 3: Setting up ChromeDriver ===")
        driver_path = self.setup_chrome_driver()
        
        # Step 4: Create Chrome driver
        self.log("=== STEP 4: Creating Chrome Driver ===")
        driver = self.setup_selenium_chrome(chrome_binary, driver_path)
        
        if not driver:
            self.log("FATAL: Could not create Chrome driver")
            return False
            
        try:
            # Step 5: Navigate to website
            self.log("=== STEP 5: Opening Website ===")
            driver.get("https://educationbluesky.com/apps/a/19900/b.html")
            self.log("Website loaded successfully")
            
            # Step 6: Wait for initial page load
            self.log("=== STEP 6: Waiting for Initial Page Load ===")
            time.sleep(3)  # Give page time to load
            
            # Step 7: Click "Play in browser" button
            self.log("=== STEP 7: Clicking 'Play in browser' Button ===")
            try:
                # Try multiple selectors to find the button
                button_selectors = [
                    '#ng-play-browser-btn',
                    'button.Button.fade-out-element',
                    'button[id*="play-browser"]',
                    'button:contains("Play in browser")',
                    'button.Button'
                ]
                
                button_clicked = False
                for selector in button_selectors:
                    try:
                        # Try to find and click the button
                        button_script = f"""
                        var button = document.querySelector('{selector}');
                        if (button && button.textContent && button.textContent.includes('Play in browser')) {{
                            button.click();
                            console.log('Successfully clicked button with selector: {selector}');
                            return true;
                        }}
                        return false;
                        """
                        
                        if driver.execute_script(button_script):
                            self.log(f"Successfully clicked 'Play in browser' button using selector: {selector}")
                            button_clicked = True
                            break
                            
                    except Exception as e:
                        self.log(f"Selector {selector} failed: {e}")
                        continue
                
                # Fallback: Try to find button by text content
                if not button_clicked:
                    fallback_script = """
                    var buttons = document.querySelectorAll('button');
                    for (var i = 0; i < buttons.length; i++) {
                        if (buttons[i].textContent && 
                            (buttons[i].textContent.includes('Play in browser') || 
                             buttons[i].textContent.includes('Play') || 
                             buttons[i].id.includes('play'))) {
                            buttons[i].click();
                            console.log('Clicked button via fallback:', buttons[i].textContent);
                            return true;
                        }
                    }
                    return false;
                    """
                    
                    if driver.execute_script(fallback_script):
                        self.log("Successfully clicked button via fallback method")
                        button_clicked = True
                
                if button_clicked:
                    self.log("Play in browser button clicked successfully")
                else:
                    self.log("Could not find Play in browser button - continuing anyway")
                    
            except Exception as e:
                self.log(f"Error with play button: {e} - continuing anyway")
            
            # Step 8: Wait for game content to load
            self.log("=== STEP 8: Waiting for Game Content ===")
            self.wait_for_game_content(driver)
            
            # Step 9: Create loading screen overlay
            self.log("=== STEP 9: Creating Loading Screen ===")
            self.create_loading_screen(driver)
            
            # Step 10: Aggressive element removal (behind loading screen)
            # NOTE: Navigation lock will be activated automatically after successful removal
            self.log("=== STEP 10: Removing UI Elements (Navigation lock will activate after) ===")
            self.smart_element_removal(driver)
            
            # Step 11: Remove loading screen to reveal clean interface
            self.log("=== STEP 11: Removing Loading Screen ===")
            self.remove_loading_screen(driver)
            
            # Step 12: Set up continuous element monitoring
            self.log("=== STEP 12: Setting up Continuous Element Monitoring ===")
            self.continuous_element_monitoring(driver)
            
            # Additional aggressive modal removal
            self.log("Setting up aggressive modal overlay prevention...")
            driver.execute_script("""
                // Aggressive modal prevention
                console.log('Setting up aggressive modal prevention...');
                
                // Override common modal creation methods
                var originalAppendChild = Element.prototype.appendChild;
                Element.prototype.appendChild = function(child) {
                    if (child && child.className && 
                        (child.className.toString().includes('modal') || 
                         child.className.toString().includes('overlay') ||
                         child.className.toString().includes('8fc4eeab'))) {
                        console.log('BLOCKED modal appendChild:', child.className);
                        return child;
                    }
                    return originalAppendChild.call(this, child);
                };
                
                var originalInsertBefore = Element.prototype.insertBefore;
                Element.prototype.insertBefore = function(newNode, referenceNode) {
                    if (newNode && newNode.className && 
                        (newNode.className.toString().includes('modal') || 
                         newNode.className.toString().includes('overlay') ||
                         newNode.className.toString().includes('8fc4eeab'))) {
                        console.log('BLOCKED modal insertBefore:', newNode.className);
                        return newNode;
                    }
                    return originalInsertBefore.call(this, newNode, referenceNode);
                };
                
                // Check every 25ms for any modal that slipped through
                setInterval(function() {
                    // Nuclear modal removal
                    var modals = document.querySelectorAll('.modal-overlay, .sc-8fc4eeab-0, div[class*="modal"], div[class*="overlay"]');
                    modals.forEach(function(modal) {
                        if (modal.id !== 'kiosk-loading-overlay') {
                            modal.remove();
                            console.log('EMERGENCY MODAL REMOVAL');
                        }
                    });
                }, 25);
                
                console.log('Modal prevention systems active');
            """)
            
            
            # Step 13: Set up kiosk protection
            self.log("=== STEP 13: Setting up Kiosk Protection ===")
            self.setup_kiosk_protection(driver)
            
            # Step 14: Trigger fullscreen safely
            self.log("=== STEP 14: Activating Fullscreen Mode ===")
            self.trigger_fullscreen_safely(driver)
            
            # Step 15: Monitor fullscreen with shutdown protection
            self.log("=== STEP 15: Starting Protected Fullscreen Monitoring ===")
            self.log("WARNING: System will automatically shutdown if fullscreen is breached for 5+ seconds!")
            self.log("INFO: Navigation lock is active - all navigation attempts will be blocked!")
            self.log("INFO: Continuous element monitoring is active - unwanted UI elements will be removed automatically!")
            self.monitor_fullscreen_with_shutdown(driver)
            
        except Exception as e:
            self.log(f"Automation error: {e}")
            # Try to recover or exit gracefully
            try:
                if 'driver' in locals():
                    driver.execute_script("console.log('Script error, attempting recovery...');")
            except:
                pass
                
        finally:
            try:
                driver.quit()
            except:
                pass
                
        return True

# Supporting functions
def is_first_run():
    """Check if this is the first time running the script"""
    setup_flag = os.path.expanduser("~/.chrome_automation_setup_complete")
    return not os.path.exists(setup_flag)

def setup_autoboot():
    """Set up automatic boot startup"""
    try:
        script_path = os.path.abspath(__file__)
        
        # Create systemd service file
        service_content = f"""[Unit]
Description=Chrome Automation Script with Advanced Kiosk Mode
After=network.target

[Service]
Type=simple
User=root
ExecStart=/usr/bin/python3 {script_path} --boot-delay
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
"""
        
        service_file = "/etc/systemd/system/chrome-automation.service"
        
        # Write service file
        with open(service_file, 'w') as f:
            f.write(service_content)
        
        # Enable and start service
        subprocess.run(["systemctl", "daemon-reload"], check=True)
        subprocess.run(["systemctl", "enable", "chrome-automation.service"], check=True)
        
        print(f"[SUCCESS] Created systemd service: {service_file}")
        return True
        
    except Exception as e:
        print(f"[ERROR] Failed to setup autoboot: {e}")
        
        # Fallback: try cron
        try:
            print("[INFO] Trying cron fallback...")
            cron_command = f"@reboot sleep 30 && /usr/bin/python3 {script_path}"
            
            # Add to root crontab
            subprocess.run(f'(crontab -l 2>/dev/null; echo "{cron_command}") | crontab -', 
                         shell=True, check=True)
            
            print("[SUCCESS] Added to cron as fallback")
            return True
            
        except Exception as e2:
            print(f"[ERROR] Cron fallback also failed: {e2}")
            return False

def mark_setup_complete():
    """Mark that the setup has been completed"""
    setup_flag = os.path.expanduser("~/.chrome_automation_setup_complete")
    try:
        with open(setup_flag, 'w') as f:
            f.write(f"Setup completed at: {time.ctime()}\n")
        return True
    except Exception as e:
        print(f"[WARNING] Could not create setup flag: {e}")
        return False

def main():
    # Check if this is the first run and set up autoboot
    if is_first_run():
        print("=" * 60)
        print("[FIRST RUN] Setting up automatic boot startup...")
        print("=" * 60)
        
        try:
            if setup_autoboot():
                mark_setup_complete()
                print("\n" + "=" * 60)
                print("[SUCCESS] Auto-boot setup completed!")
                print("[INFO] Script will now run automatically on system boot")
                print("[INFO] You can run the script manually anytime")
                print("=" * 60)
            else:
                print("\n[WARNING] Auto-boot setup failed, but script can still run manually")
                
        except Exception as e:
            print(f"\n[ERROR] Auto-boot setup failed: {e}")
            print("[INFO] Script will continue to run manually")
    
    # Add delay on boot to let system stabilize
    if len(sys.argv) > 1 and sys.argv[1] == '--boot-delay':
        print("[BOOT] Waiting 30 seconds for system to stabilize...")
        time.sleep(30)
    
    # Run the main automation
    print("\n" + "=" * 60)
    print("[STARTING] Chrome Automation Script with Advanced Kiosk Mode")
    print("[WARNING] This script includes system shutdown protection!")
    print("=" * 60)
    
    automation = ChromeAutomation()
    automation.run_automation()

if __name__ == "__main__":
    main()
