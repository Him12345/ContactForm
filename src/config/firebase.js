// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwNJuGouEuRz7a2Zo9UPR0rSq4zruv-A4",
  authDomain: "vite-contact-form.firebaseapp.com",
  projectId: "vite-contact-form",
  storageBucket: "vite-contact-form.appspot.com",
  messagingSenderId: "947381010358",
  appId: "1:947381010358:web:490b46f32a387399300b17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
