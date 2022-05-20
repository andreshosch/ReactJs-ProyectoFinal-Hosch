// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJrAodjJnZwfgSySiWlfw0apqtTbxJYp0",
    authDomain: "reactjs-hosch-proyectofinal.firebaseapp.com",
    projectId: "reactjs-hosch-proyectofinal",
    storageBucket: "reactjs-hosch-proyectofinal.appspot.com",
    messagingSenderId: "575683343827",
    appId: "1:575683343827:web:39503d4bfc0800a4e92b26"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const BaseDatos = getFirestore(app)

export default BaseDatos