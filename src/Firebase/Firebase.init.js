// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOm7J3NQoVGd6w_Sw2zK-LKEpewINWHvo",
  authDomain: "dragon-new-portal.firebaseapp.com",
  projectId: "dragon-new-portal",
  storageBucket: "dragon-new-portal.firebasestorage.app",
  messagingSenderId: "23129866541",
  appId: "1:23129866541:web:1e579559a29b875ccf13a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app