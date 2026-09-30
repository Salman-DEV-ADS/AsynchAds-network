// ==========================================
// FIREBASE CONFIG - SHARED ACROSS ALL PAGES
// Change keys here once, updates everywhere
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-check.js";

// ⚠️ PASTE YOUR REAL FIREBASE KEYS HERE (only place in the whole project)
const firebaseConfig = {
 apiKey: "AIzaSyALBt9hfwejVrpmAU2I2JY3h7puWT77tOo",
      authDomain: "asynchads-network.firebaseapp.com",
      projectId: "asynchads-network",
      storageBucket: "asynchads-network.firebasestorage.app",
      messagingSenderId: "871536301577",
      appId: "1:871536301577:web:8d706774f71c48dcc30ad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize App Check
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider('6LeFJNctAAAAAJt3zj8Eg_MeUtNUnOiveMBEDuM1'),
  isTokenAutoRefreshEnabled: true
});

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export so other files can use them
export { app, auth, db, appCheck };