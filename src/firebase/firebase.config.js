// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1OFJX_QoIX64_2hSf9NKSF9C0HQt97_s",
  authDomain: "jinstore-c5844.firebaseapp.com",
  projectId: "jinstore-c5844",
  storageBucket: "jinstore-c5844.appspot.com",
  messagingSenderId: "83820326837",
  appId: "1:83820326837:web:ae1cae97ead099257cf3fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)