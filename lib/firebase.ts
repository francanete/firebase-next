import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

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
export const firestore = firebase.firestore();
export const storage = firebase.storage();
