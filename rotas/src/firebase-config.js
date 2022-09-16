// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjIErJus6D9_aMuWYsr5gB6R08YFFqdOo",
  authDomain: "facebook-20290.firebaseapp.com",
  projectId: "facebook-20290",
  storageBucket: "facebook-20290.appspot.com",
  messagingSenderId: "1085220144151",
  appId: "1:1085220144151:web:2e73d8377216666fac8852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);