// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXgGgiFjpfpm430s4Kfk2R95t8xwAz5Aw",
  authDomain: "ema-john-package.firebaseapp.com",
  projectId: "ema-john-package",
  storageBucket: "ema-john-package.appspot.com",
  messagingSenderId: "178169298206",
  appId: "1:178169298206:web:fdc039144becc351aadd0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// console.log(auth);

export default auth;