// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACCdbMMSBBAB--EOfT1M9xvgdNc_vN6EA",
  authDomain: "independent-service-prov-1702d.firebaseapp.com",
  projectId: "independent-service-prov-1702d",
  storageBucket: "independent-service-prov-1702d.appspot.com",
  messagingSenderId: "458459543123",
  appId: "1:458459543123:web:fa487490b8aea2773ef8a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;