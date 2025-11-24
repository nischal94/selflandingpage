import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoSlT2Xmz37MOwskEhxp-oiCjEJfAI40E",
  authDomain: "nischalapp-71d67.firebaseapp.com",
  projectId: "nischalapp-71d67",
  storageBucket: "nischalapp-71d67.firebasestorage.app",
  messagingSenderId: "555756157002",
  appId: "1:555756157002:web:76cc5b7203e5504934ceb3"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider };
