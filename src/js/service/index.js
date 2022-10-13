import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { firebaseConfig } from '../firebase-config';
import { toggleBtnContent } from './login';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { afterLogIn, afterLogOut } from './create-markup';
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getDatabase();

export const signIn = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // console.log(credential);
      const token = credential.accessToken;
      // console.log(token);
      // The signed-in user info.
      const user = result.user;
      // console.log(user);
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export function signOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
}

onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    toggleBtnContent(user);
    afterLogIn();

    // ...
  } else {
    toggleBtnContent(user);
    afterLogOut();
  }
});

export function getUser() {
  return auth.currentUser;
}
// listeners //

// disableBtnRefs.addEventListener('click', disableFavoriteBtn);

const refs = {
  cocktailList: document.querySelector('.cocktails__list'),
};

export function disableFavoriteBtn(e) {
  const favBtn = e.target.closest('.js-add-btn');
  // console.log(favBtn);
}
