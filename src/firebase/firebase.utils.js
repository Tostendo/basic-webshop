import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDFBB3J8CeNCJCxWbNyX2Lz91V1ZGY7HcI",
  authDomain: "test-webshop-1501.firebaseapp.com",
  databaseURL: "https://test-webshop-1501.firebaseio.com",
  projectId: "test-webshop-1501",
  storageBucket: "test-webshop-1501.appspot.com",
  messagingSenderId: "604864139481",
  appId: "1:604864139481:web:0a0da2ac04006a00176ec8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapShot = await userRef.get();
  if (!userSnapShot.exists) {
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
      console.log("error creating user: ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;