# Firebase Authentication with React

This project is a simple web application that demonstrates user authentication using Firebase with a React frontend. It includes options for signing in with Google or with an email and password.

## Features

- User login with email and password
- Sign-in with Google
- Simple and clean UI

## Technologies Used

- React
- Vite
- Firebase Authentication
- Tailwind CSS
- Material UI

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.
- A Firebase project with Authentication enabled.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Najahi-Dev/Learn_React.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd firebase-auth-react
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

1.  Create a `src/config.js` file with your Firebase project configuration:

    ```javascript
    import { initializeApp } from "firebase/app";
    import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";


    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
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
    ```

2.  Replace the placeholder values with your actual Firebase project configuration.

### Running the Application

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application on `http://localhost:5173` (or another port if 5173 is in use).