import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD79tNYwqZd6yO1RI4WkH19CJfsKRkKPy8",
    authDomain: "linkedin-clone-636a9.firebaseapp.com",
    projectId: "linkedin-clone-636a9",
    storageBucket: "linkedin-clone-636a9.appspot.com",
    messagingSenderId: "539870555323",
    appId: "1:539870555323:web:33ea4966e34a751f2c4d9e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth};