import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR05QYZNgLvN1CKd8S9QdVt7uoYwey62Q",
  authDomain: "expensetracker-67f97.firebaseapp.com",
  projectId: "expensetracker-67f97",
  storageBucket: "expensetracker-67f97.appspot.com",
  messagingSenderId: "563885265605",
  appId: "1:563885265605:web:9d2cafe8af17f1c65096ac",
  measurementId: "G-L8XYX5QS5W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
