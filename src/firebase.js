// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app"

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBt0ddV3ZhMET43xCTtrkVaz4Ze7LEEId8",
    authDomain: "socialmedia-b728c.firebaseapp.com",
    projectId: "socialmedia-b728c",
    storageBucket: "socialmedia-b728c.appspot.com",
    messagingSenderId: "90185200743",
    appId: "1:90185200743:web:2cca6928dae522006c50c2",
    measurementId: "G-HDZCYRMD5P"
  };

  firebase.initializeApp( firebaseConfig )
  export default firebase.auth()