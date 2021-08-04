import firebase from 'firebase/app';
import "firebase/auth";

export const auth =  firebase.initializeApp({
    apiKey: "AIzaSyBaW4qmE1vHlq-_3DQlHbZyknm6jWazJh0",
    authDomain: "chatify-59f3f.firebaseapp.com",
    projectId: "chatify-59f3f",
    storageBucket: "chatify-59f3f.appspot.com",
    messagingSenderId: "293020537066",
    appId: "1:293020537066:web:4be1429f98b209aaa94793",
       measurementId: "G-BMS64GRF1F"
  }).auth();

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export const auth = {
//   apiKey: "AIzaSyBaW4qmE1vHlq-_3DQlHbZyknm6jWazJh0",
//   authDomain: "chatify-59f3f.firebaseapp.com",
//   projectId: "chatify-59f3f",
//   storageBucket: "chatify-59f3f.appspot.com",
//   messagingSenderId: "293020537066",
//   appId: "1:293020537066:web:4be1429f98b209aaa94793",
//   measurementId: "G-BMS64GRF1F"
// };