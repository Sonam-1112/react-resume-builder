import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBkvDjtxNCtCvnfiwk2el2N6vIUfWPiOao",
    authDomain: "resume-builder-5d059.firebaseapp.com",
    projectId: "resume-builder-5d059",
    storageBucket: "resume-builder-5d059.appspot.com",
    messagingSenderId: "85786350512",
    appId: "1:85786350512:web:0f8ad4cc72f5a1e2227c75",
    measurementId: "G-GZCVL5D031"
});

export const auth = app.auth()
export const db =  app.database().ref();
export default app;