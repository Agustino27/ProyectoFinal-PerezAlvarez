import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHzZdfBGFn7BmcwAdkGjOTyN4USWxJD5g",
  authDomain: "digital-mensa.firebaseapp.com",
  projectId: "digital-mensa",
  storageBucket: "digital-mensa.firebasestorage.app",
  messagingSenderId: "530676797746",
  appId: "1:530676797746:web:addcc809a1b4b910ba872b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);