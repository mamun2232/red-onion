// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvlnH4lqCyolN53bDzg3DgV03XFKg9OSc",
  authDomain: "red-onion-ec84d.firebaseapp.com",
  projectId: "red-onion-ec84d",
  storageBucket: "red-onion-ec84d.appspot.com",
  messagingSenderId: "62555521784",
  appId: "1:62555521784:web:b3a93fc7b2527af0e3f10d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth