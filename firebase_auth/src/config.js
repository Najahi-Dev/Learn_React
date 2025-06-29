import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";


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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//Handle Google Login
const handleGoogleLogin = async(setError) =>{
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log('Google Sign-In:', result.user);
        setError('')
    } catch (err) {
        console.log(err);
        setError('Google Sign-In Failed')
    }
}

//Handle Login using Email and Password
const handleSubmit = async(e, setError) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const userCred = await signInWithEmailAndPassword(auth,email,password);
        console.log('User signed in:', userCred.user);
        setError('')
    } catch (err) {
        console.log(err);
        setError('Invalid Email and Password');
    }
    e.target.reset();
}

export { auth, googleProvider, handleGoogleLogin, handleSubmit }