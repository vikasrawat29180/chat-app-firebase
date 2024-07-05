
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "AIzaSyCQoqwG2pRkEf0PCI1eEYRDDdvc1yXExco",
  authDomain: "reactchat-7fa9f.firebaseapp.com",
  projectId: "reactchat-7fa9f",
  storageBucket: "reactchat-7fa9f.appspot.com",
  messagingSenderId: "543319492025",
  appId: "1:543319492025:web:2bb7bdb484b39e68382268"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore();
export const storage=getStorage();