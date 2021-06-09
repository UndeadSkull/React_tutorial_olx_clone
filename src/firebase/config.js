import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCHbVZjY875yho8tighzoTCZay0FQT-BGM",
    authDomain: "cross-olx.firebaseapp.com",
    projectId: "cross-olx",
    storageBucket: "cross-olx.appspot.com",
    messagingSenderId: "895801471441",
    appId: "1:895801471441:web:52cd32669857d0f45070f0",
    measurementId: "G-NRQE5QRJ9M"
};
export default firebase.initializeApp(firebaseConfig)