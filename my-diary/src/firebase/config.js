// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-WY48I-QPhI_Ybq5mFFN64f0t4R74vWg",
    authDomain: "my-diary-16776.firebaseapp.com",
    projectId: "my-diary-16776",
    storageBucket: "my-diary-16776.appspot.com",
    messagingSenderId: "997457273450",
    appId: "1:997457273450:web:744bbbccad3aa816842013",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//파이어베이스 초기화
const appFireStore = getFirestore(app);
//인증 초기화
const appAuth = getAuth();

export { appFireStore, appAuth };
