// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsX8jZP0atz9Zr8xKI64YtNVwiKYwHUbk",
    authDomain: "halal-food-japan.firebaseapp.com",
    projectId: "halal-food-japan",
    storageBucket: "halal-food-japan.appspot.com",
    messagingSenderId: "356774365495",
    appId: "1:356774365495:web:87ef31ccb79845a4b772b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;