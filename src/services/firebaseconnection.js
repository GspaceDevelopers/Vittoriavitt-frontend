import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB8cYqkaXkY9eBp5B7HpZJY3GlJdZG84Ik",
  authDomain: "vittoriavittstore.firebaseapp.com",
  projectId: "vittoriavittstore",
  storageBucket: "vittoriavittstore.appspot.com",
  messagingSenderId: "104367851885",
  appId: "1:104367851885:web:ca82d016fcb16cb44b7264",
  measurementId: "G-HBDQBH8HY7"
};
  

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;