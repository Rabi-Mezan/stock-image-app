// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtwxLUX47dUS_cD2hgZCzhvAoZECr3Ubo",
    authDomain: "pure-stock.firebaseapp.com",
    projectId: "pure-stock",
    storageBucket: "pure-stock.appspot.com",
    messagingSenderId: "508005047024",
    appId: "1:508005047024:web:cbcd77476e11b80c240035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export default app;