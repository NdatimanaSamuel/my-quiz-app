// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqyAeSsrWaHKoYuYeCm-bawOse1_i82I",
  authDomain: "my-quiz-app-584cd.firebaseapp.com",
  projectId: "my-quiz-app-584cd",
  storageBucket: "my-quiz-app-584cd.appspot.com",
  messagingSenderId: "559405720453",
  appId: "1:559405720453:web:f2fb2abe48601f8ab21aec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();

export const db=getFirestore(app);