import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB8oqnBNwo-LL3wJxU6x1pqIZwlCdF7JCU",
  authDomain: "void-ann.firebaseapp.com",
  databaseURL: "https://void-ann-default-rtdb.firebaseio.com",
  projectId: "void-ann",
  storageBucket: "void-ann.firebasestorage.app",
  messagingSenderId: "323948351263",
  appId: "1:323948351263:web:239c326fbe0e1c25f4aa2a"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function sendAnnouncement(message) {
  try {
    const announcementRef = ref(database, 'announcements/latest');
    await set(announcementRef, {
      message: message,
      timestamp: Date.now()
    });
    return { success: true };
  } catch (error) {
    console.error('Firebase error:', error);
    return { success: false, error: error.message };
  }
}
