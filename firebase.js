import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCB53f-5fXfVYFIIQmfVisBY4F7Qjq-Fzk",
  authDomain: "include-99836.firebaseapp.com",
  projectId: "include-99836",
  storageBucket: "include-99836.appspot.com",
  messagingSenderId: "630754091790",
  appId: "1:630754091790:web:dc1432ce8dae71d41fad5f",
  measurementId: "G-E0LJ5Y6HP9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
