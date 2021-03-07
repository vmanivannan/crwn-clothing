import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA1RrIuXIuhSkaTByIXOq2gRceM5gZpyOQ",
    authDomain: "crwn-db-eno.firebaseapp.com",
    projectId: "crwn-db-eno",
    storageBucket: "crwn-db-eno.appspot.com",
    messagingSenderId: "503302644932",
    appId: "1:503302644932:web:3eb73ca993ff4d4a0b5591"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;