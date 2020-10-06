import * as firebase from 'firebase';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBeKMeLRNMHnCTtN7Q1a6zVcQgI7cdE1CQ",
    authDomain: "scheduler-db8e9.firebaseapp.com",
    databaseURL: "https://scheduler-db8e9.firebaseio.com",
    projectId: "scheduler-db8e9",
    storageBucket: "scheduler-db8e9.appspot.com",
    messagingSenderId: "1067590984944",
    appId: "1:1067590984944:web:53129dd56f8ace3ac84e35",
    measurementId: "G-CZTNCFQYGD"
};

firebase.initializeApp(firebaseConfig);

export { firebase };