// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHgWre1E5SqJhmx0AtCH9jyFfDnW4wg1g",
  authDomain: "react-login-a3bf1.firebaseapp.com",
  projectId: "react-login-a3bf1",
  storageBucket: "react-login-a3bf1.appspot.com",
  messagingSenderId: "758663578211",
  appId: "1:758663578211:web:41f917445701118258ae56"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );