import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCT3KMlZvkMyyPQgjruONyhoOJU5DE01d0",
    authDomain: "archilab-f952e.firebaseapp.com",
    projectId: "archilab-f952e",
    databaseURL: "https://archilab-f952e-default-rtdb.firebaseio.com/",
    storageBucket: "archilab-f952e.appspot.com",
    messagingSenderId: "363573601354",
    appId: "1:363573601354:web:d68377fef7e88ccee3b2b3",
    measurementId: "G-NSVMSQ0RS7"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getDatabase(app);

export default fireDB;