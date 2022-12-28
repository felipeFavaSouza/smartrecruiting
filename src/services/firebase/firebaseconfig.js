import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjtALGZk1X2bFUnM3tgq7imocn3A_twD0",
    authDomain: "smartrecruit-3e41b.firebaseapp.com",
    projectId: "smartrecruit-3e41b",
    storageBucket: "smartrecruit-3e41b.appspot.com",
    messagingSenderId: "118639000613",
    appId: "1:118639000613:web:50fd5db086cee544ad93cc",
    measurementId: "G-8PR36MVYSE"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);