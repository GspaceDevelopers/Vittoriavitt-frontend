import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDTby1AsOZzIlAv_EpzkOExrCUWqHDWvOU",
    authDomain: "appteste-a40e3.firebaseapp.com",
    projectId: "appteste-a40e3",
    storageBucket: "appteste-a40e3.appspot.com",
    messagingSenderId: "733024573713",
    appId: "1:733024573713:web:845e0cb659d4cd8e6bd4b0",
    measurementId: "G-X30WVSP4C0"
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