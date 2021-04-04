import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNBzaxyDsO7gNX5ctoTkxPJAjBOxXFDho",
  authDomain: "code-step-by-step.firebaseapp.com",
  projectId: "code-step-by-step",
  storageBucket: "code-step-by-step.appspot.com",
  messagingSenderId: "978810250517",
  appId: "1:978810250517:web:242ae107a6b3ecde14f51c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;