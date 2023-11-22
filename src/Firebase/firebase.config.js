// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjAtRzxqnZC89e6y1oeJVR7eYE5yDwsmA",
  authDomain: "motor-marvel.firebaseapp.com",
  projectId: "motor-marvel",
  storageBucket: "motor-marvel.appspot.com",
  messagingSenderId: "1062410777405",
  appId: "1:1062410777405:web:68360d199b5ea77264cb54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;