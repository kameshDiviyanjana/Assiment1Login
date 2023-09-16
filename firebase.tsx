// Import the functions you need from the SDKs you need
import { firebase } from "@react-native-firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYWPZy0o_kaiizVNyDnbYYF0sl0WHipP4",
  authDomain: "assimentlogin.firebaseapp.com",
  projectId: "assimentlogin",
  storageBucket: "assimentlogin.appspot.com",
  messagingSenderId: "548935886865",
  appId: "1:548935886865:web:c2c9e01ff3e684a69ae9b0"
};

// Initialize Firebase
let app 

app = initializeApp(firebaseConfig);
const auth = getFirestore(app)

export {auth};
