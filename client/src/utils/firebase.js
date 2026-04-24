import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewx-9c089.firebaseapp.com",
  projectId: "interviewx-9c089",
  storageBucket: "interviewx-9c089.firebasestorage.app",
  messagingSenderId: "402609978448",
  appId: "1:402609978448:web:4648b6ce9507e929b36555"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}