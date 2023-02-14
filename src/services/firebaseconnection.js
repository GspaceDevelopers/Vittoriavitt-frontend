import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyApC6J7i1njQDxiC5UgCuojLjAbZU9ByRc",
    authDomain: "apphelpteste.firebaseapp.com",
    projectId: "apphelpteste",
    storageBucket: "apphelpteste.appspot.com",
    messagingSenderId: "456455941215",
    appId: "1:456455941215:web:265a2b28aaa8aad29e3fea",
    measurementId: "G-XBMEBBZ0CK"
  };
/*const firebaseConfig = {
    apiKey: "AIzaSyAUDGbAgnxPBUsVMCerSnJ5n4XiUAElMdU",
    authDomain: "vittoriavitt-539a1.firebaseapp.com",
    projectId: "vittoriavitt-539a1",
    storageBucket: "vittoriavitt-539a1.appspot.com",
    messagingSenderId: "852759829393",
    appId: "1:852759829393:web:5dbdc6fb4fda97c78a9830",
    measurementId: "G-JKQFQPFY0S"
};*/
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;