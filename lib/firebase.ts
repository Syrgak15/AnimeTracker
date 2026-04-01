import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsxu6l9ad87oXiV6Y0tQVqnoHxJj1bM14",
    authDomain: "anira-6e935.firebaseapp.com",
    projectId: "anira-6e935",
    storageBucket: "anira-6e935.firebasestorage.app",
    messagingSenderId: "820794515378",
    appId: "1:820794515378:web:221e55cd76777890808eab",
    measurementId: "G-ZQ5MJ10MRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);