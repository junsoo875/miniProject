import Vue from "vue";
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase
  .firestore()
  .collection("test")
  .add({ test: "aaa" })
  .then((r) => console.log(r))
  .catch((e) => console.log(e));
