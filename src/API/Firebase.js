import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkV-io4in-5Gcn_0rTVnuF90lDiKvRq_o",
  authDomain: "dbfg-db198.firebaseapp.com",
  projectId: "dbfg-db198",
  storageBucket: "dbfg-db198.appspot.com",
  messagingSenderId: "591278921742",
  appId: "1:591278921742:web:300fc5a59b7c555dcdc45f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth, db };
