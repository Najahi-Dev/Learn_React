import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC_J6CFOH4RwjJxQeOn-21FBL4Wf_AFC2A",
    authDomain: "fir-login-1a987.firebaseapp.com",
    projectId: "fir-login-1a987",
    storageBucket: "fir-login-1a987.firebasestorage.app",
    messagingSenderId: "368156749716",
    appId: "1:368156749716:web:1ee942fdf24766a85fe981",
    measurementId: "G-PVYZ4QEVVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore();

export { db };