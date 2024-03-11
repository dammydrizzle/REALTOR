// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJEiX5GbvstrPQgG_ePKdIuAUiIQzKN1c",
  authDomain: "realtor-clone-394a8.firebaseapp.com",
  projectId: "realtor-clone-394a8",
  storageBucket: "realtor-clone-394a8.appspot.com",
  messagingSenderId: "643683888140",
  appId: "1:643683888140:web:c470edba62318237855229"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()