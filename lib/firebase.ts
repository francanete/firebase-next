import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBngJTUspAXkwzJ9FfobGcl2vQDEKWEHqs",
  authDomain: "fir-next-45b06.firebaseapp.com",
  projectId: "fir-next-45b06",
  storageBucket: "fir-next-45b06.appspot.com",
  messagingSenderId: "1064102144063",
  appId: "1:1064102144063:web:9f31f30f7232f6b326b08a",
  measurementId: "G-BG7X1H4FZK",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
