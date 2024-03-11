// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD29CDNoDYB1T7Fh20IiuJJmPZeVWTz5MY",
  authDomain: "cosmos-mhlanga-portfolio.firebaseapp.com",
  projectId: "cosmos-mhlanga-portfolio",
  storageBucket: "cosmos-mhlanga-portfolio.appspot.com",
  messagingSenderId: "424212862597",
  appId: "1:424212862597:web:7a65a64b6e4b95f729fbec",
  measurementId: "G-S717YXYP78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);