import firebase from 'firebase/app';
import 'firebase/firestore';
require('firebase/auth');



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzqBNOvfakEolc-BHbgMAjwi2yxKKG4TI",
    authDomain: "facebook-clone-552b9.firebaseapp.com",
    databaseURL: "https://facebook-clone-552b9.firebaseio.com",
    projectId: "facebook-clone-552b9",
    storageBucket: "facebook-clone-552b9.appspot.com",
    messagingSenderId: "921704591788",
    appId: "1:921704591788:web:3c9a054fca51fa62390a09",
    measurementId: "G-8WJJ886EBG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  

  export { auth, provider};
  export default db;