import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCjtALGZk1X2bFUnM3tgq7imocn3A_twD0",
  authDomain: "smartrecruit-3e41b.firebaseapp.com",
  projectId: "smartrecruit-3e41b",
  storageBucket: "smartrecruit-3e41b.appspot.com",
  messagingSenderId: "118639000613",
  appId: "1:118639000613:web:50fd5db086cee544ad93cc",
  measurementId: "G-8PR36MVYSE"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
