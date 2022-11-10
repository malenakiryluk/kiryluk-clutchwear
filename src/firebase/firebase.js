
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import App from "../App";

const firebaseConfig = {
  apiKey: "AIzaSyCtOqNf3pWUST9ffOeTPrw0HxZE25ITxmw",
  authDomain: "clutchwear-d9526.firebaseapp.com",
  projectId: "clutchwear-d9526",
  storageBucket: "clutchwear-d9526.appspot.com",
  messagingSenderId: "647138383544",
  appId: "1:647138383544:web:06a69f8c99533663d3c64d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)