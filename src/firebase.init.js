// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFBmz3PNFNV-wZs8djF3ZsKeI8DmQ3iCg",
    authDomain: "router-firebase-integrat-ba2b1.firebaseapp.com",
    projectId: "router-firebase-integrat-ba2b1",
    storageBucket: "router-firebase-integrat-ba2b1.appspot.com",
    messagingSenderId: "925376036758",
    appId: "1:925376036758:web:83e9196ca85e634f3167b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;