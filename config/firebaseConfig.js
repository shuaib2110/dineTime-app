// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcpqS_WzAUxD-wa9Wc-g68kYTegOYM8Sk",
  authDomain: "dine-time-app-dev.firebaseapp.com",
  projectId: "dine-time-app-dev",
  storageBucket: "dine-time-app-dev.firebasestorage.app",
  messagingSenderId: "711040686650",
  appId: "1:711040686650:web:b0c039718dfad47eaf3303",
  measurementId: "G-51BP9N73QH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
