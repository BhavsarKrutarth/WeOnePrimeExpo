import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9iomRghSQ_kp40qMTyuQzv3zM76vHEKI",
  authDomain: "weoneprime.firebaseapp.com",
  projectId: "weoneprime",
  appId: "1:274641210203:android:4b9a26b0b833f2ee13a87e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
