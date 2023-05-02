// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCD2WmXECc53VZI4Y9nhfNlNuCT9eZJLfE",
    authDomain: "the-chef-point.firebaseapp.com",
    projectId: "the-chef-point",
    storageBucket: "the-chef-point.appspot.com",
    messagingSenderId: "1090365301420",
    appId: "1:1090365301420:web:a32cef92060e07b2273509"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;