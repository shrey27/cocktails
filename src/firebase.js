import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp( {
    apiKey: "AIzaSyBRycI3lerh15DHNslZhQN35AKL2YaG0Q8",
    authDomain: "cocktails-aacfd.firebaseapp.com",
    projectId: "cocktails-aacfd",
    storageBucket: "cocktails-aacfd.appspot.com",
    messagingSenderId: "358070702083",
    appId: "1:358070702083:web:886e052c1a860383b0be36"
});

export const firestore = firebase.firestore();

export default firebase;