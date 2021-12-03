import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBL38nQfR3y8FG3rdsa1YfPvz2IfjHMv-A",
  authDomain: "mindbalance-b616e.firebaseapp.com",
  projectId: "mindbalance-b616e",
  storageBucket: "mindbalance-b616e.appspot.com",
  messagingSenderId: "1031978621288",
  appId: "1:1031978621288:web:adb927fc7494d93c80dedd"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);