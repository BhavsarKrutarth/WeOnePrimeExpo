import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9iomRghSQ_kp40qMTyuQzv3zM76vHEKI",
  authDomain: "weoneprime.firebaseapp.com",
  projectId: "weoneprime",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:274641210203:android:4b9a26b0b833f2ee13a87e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };