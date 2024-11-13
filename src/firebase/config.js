import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFz-iNpJJBxeS8BL7_OSANVwVd5sXMjqg",
  authDomain: "coderhouse-final-491e2.firebaseapp.com",
  projectId: "coderhouse-final-491e2",
  storageBucket: "coderhouse-final-491e2.firebasestorage.app",
  messagingSenderId: "1079092325595",
  appId: "1:1079092325595:web:ceff7dfb272fa94cccf0fe"
};

// 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);