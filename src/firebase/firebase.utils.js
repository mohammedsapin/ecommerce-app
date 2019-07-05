import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAyKG4sXv5AxwkeIiGFL8s8_XGFE0kp2L4",
  authDomain: "ecommerce-db-9ec67.firebaseapp.com",
  databaseURL: "https://ecommerce-db-9ec67.firebaseio.com",
  projectId: "ecommerce-db-9ec67",
  storageBucket: "",
  messagingSenderId: "574305412400",
  appId: "1:574305412400:web:a49ef62471db7c0d",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
