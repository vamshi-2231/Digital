import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "digital-5601b.firebaseapp.com",
    projectId: "digital-5601b",
    storageBucket: "digital-5601b.appspot.com",
    messagingSenderId: "1025201950578",
    appId: "1:1025201950578:web:0bf03a9503c74fd97b17eb"
  };
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
