import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC3f0JTsQujidX-CLyxwXBB2FvfN-b3uSI",
  authDomain: "hackathoooon.firebaseapp.com",
  projectId: "hackathoooon",
  storageBucket: "hackathoooon.appspot.com",
  messagingSenderId: "133368924533",
  appId: "1:133368924533:web:8aaa733a85b9790d9a6b3c",
  measurementId: "G-KGD6G5Q978",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
