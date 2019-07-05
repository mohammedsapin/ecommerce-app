import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAyKG4sXv5AxwkeIiGFL8s8_XGFE0kp2L4",
  authDomain: "ecommerce-db-9ec67.firebaseapp.com",
  databaseURL: "https://ecommerce-db-9ec67.firebaseio.com",
  projectId: "ecommerce-db-9ec67",
  storageBucket: "",
  messagingSenderId: "574305412400",
  appId: "1:574305412400:web:a49ef62471db7c0d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;