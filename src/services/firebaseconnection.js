import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA31oxc0deu3OlYPB7GnBkWap6t-gWC78M",
  authDomain: "vittoriavitt-6ffd0.firebaseapp.com",
  projectId: "vittoriavitt-6ffd0",
  storageBucket: "vittoriavitt-6ffd0.appspot.com",
  messagingSenderId: "297891922453",
  appId: "1:297891922453:web:78aafcf4c746f1fe15441c",
  measurementId: "G-L1H11888T2"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;