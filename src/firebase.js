import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCWgC0TFTQRxByfpk_UV9YNdvCA0-h3O98",
  authDomain: "al-pathfinder.firebaseapp.com",
  projectId: "al-pathfinder",
  storageBucket: "al-pathfinder.appspot.com",
  messagingSenderId: "117783676156",
  appId: "1:117783676156:web:a7fed3b939c05bef770379"
});

export const auth = app.auth();
export default app;
