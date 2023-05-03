import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { initializeApp } from "firebase/app";

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App.js';

// import reportWebVitals from './reportWebVitals';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjjsGziYB8o_b1WozK_XOBy9Z-MnxZZ4A",
  authDomain: "iconnect-23.firebaseapp.com",
  projectId: "iconnect-23",
  storageBucket: "iconnect-23.appspot.com",
  messagingSenderId: "226565239518",
  appId: "1:226565239518:web:e14be7896d4aa66ecc884f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
