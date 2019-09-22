import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAtBox9-H1R0bY07BPf-vMb5u8-xNqyUWw",
    authDomain: "vue-start1.firebaseapp.com",
    databaseURL: "https://vue-start1.firebaseio.com",
    projectId: "vue-start1",
    storageBucket: "vue-start1.appspot.com",
    messagingSenderId: "762039101223",
    appId: "1:762039101223:web:4f5ac90023f46707552b02"
};

firebase.initializeApp(firebaseConfig); 
const db = firebase.firestore();

export default db;
