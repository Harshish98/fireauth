import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCR_eSf6EGqA6R1kDkxKzcoNlN4FtzNpIg",
  authDomain: "fir-auth-becb0.firebaseapp.com",
  projectId: "fir-auth-becb0",
  storageBucket: "fir-auth-becb0.appspot.com",
  messagingSenderId: "170162485679",
  appId: "1:170162485679:web:7287c0342b7b8714b8575a",
  measurementId: "G-ZY816MB5NY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
