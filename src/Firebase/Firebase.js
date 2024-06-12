// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2smrHU7ya3beaoRuvk6cMmEVLwP_i_B8",
  authDomain: "real-estate-industry.firebaseapp.com",
  projectId: "real-estate-industry",
  storageBucket: "real-estate-industry.appspot.com",
  messagingSenderId: "331684558535",
  appId: "1:331684558535:web:9a226e6dbf2627184670e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth