import firebase from "firebase/app"
import "firebase/auth"

export const auth =firebase.initializeApp( {
    apiKey: "AIzaSyAZJFej7ackVyVdaRoVCqn72hQ65lQ0OVA",
    authDomain: "unichat-52af7.firebaseapp.com",
    projectId: "unichat-52af7",
    storageBucket: "unichat-52af7.appspot.com",
    messagingSenderId: "487403757553",
    appId: "1:487403757553:web:f66e41598e1f5cecd5ee50"
  }).auth();