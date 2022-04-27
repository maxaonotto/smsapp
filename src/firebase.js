import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCk6dOy5uqMZ8D0-gCexHwifUXfbi2H1TQ",
    authDomain: "smsapp-a0a87.firebaseapp.com",
    projectId: "smsapp-a0a87",
    storageBucket: "smsapp-a0a87.appspot.com",
    messagingSenderId: "763033901477",
    appId: "1:763033901477:web:fea4c54d83c0de1042704c"
}).auth();