// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


const config = {
    apiKey: "AIzaSyBzD9FNHXG0juOEp_oDZl94OwIJ-AH7Y44",
    authDomain: "csr-charity.firebaseapp.com",
    projectId: "csr-charity",
    storageBucket: "csr-charity.appspot.com",
    messagingSenderId: "108909592891",
    appId: "1:108909592891:web:1f5012a1856c75aa9e771e",
    measurementId: "G-Q8G2H6DD6Y"
};


const app = initializeApp(config);

const auth = getAuth();

export async function createUser(email, password){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export function logInUser(email, password){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if(!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if(!snapShot.exists) {
//     const {displayName, email} = userAuth;
//     const createdAt = new Date();

//     try{

//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       })
//     } catch(err){
//       console.log('error created user', err.message)
//     }
//   }
//   return userRef;
// }

//   firebase.initializeApp(config);

//   export const auth = firebase.auth();
//   export const firestore = firebase.firestore();
  
//   const provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({ prompt: 'select_account' });
//   export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
//   export default firebase;