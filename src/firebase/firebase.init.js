import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARFQQDU9C_T4vpFPN4pjYDdqq20fekbXo",
  authDomain: "interactive-36f9c.firebaseapp.com",
  projectId: "interactive-36f9c",
  storageBucket: "interactive-36f9c.appspot.com",
  messagingSenderId: "46577267981",
  appId: "1:46577267981:web:aa797c52bfdaf24e65ec44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;