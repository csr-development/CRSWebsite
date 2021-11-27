// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from "firebase/auth";


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
      console.log(errorCode, errorMessage)
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
    console.log(errorCode, errorMessage)
  });
}

export function logOut(){
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  console.log(error);
});
}

export function resetPassword(email){
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    console.log('email sent')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode, errorMessage)
})
}