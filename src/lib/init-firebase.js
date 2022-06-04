import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEelRGuowEBtA0Cd7du5JvfZR4DfARSaI",
  authDomain: "tik-tok-clone-4ede5.firebaseapp.com",
  projectId: "tik-tok-clone-4ede5",
  storageBucket: "tik-tok-clone-4ede5.appspot.com",
  messagingSenderId: "589085294804",
  appId: "1:589085294804:web:289838db1fa5f8890c7b41"
};

const app = initializeApp(firebaseConfig);
const db =getFirestore(app);

export default db;