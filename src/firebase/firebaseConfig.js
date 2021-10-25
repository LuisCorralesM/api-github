
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBAUu_LjNhIt5z2VKIiSoqTtI7WNvgCc7w",
  authDomain: "prueba-tecnica-42aa0.firebaseapp.com",
  projectId: "prueba-tecnica-42aa0",
  storageBucket: "prueba-tecnica-42aa0.appspot.com",
  messagingSenderId: "478281817268",
  appId: "1:478281817268:web:ac2cf92d6b7c745a618be1"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()
const db = getFirestore()

export {google,  facebook ,app, db}
