import firebase from 'firebase';
// Initialize Firebase
const config = {
    apiKey: "AIzaSyAncWPFw-J5BBwlE2g-9CCUC4c8Wp2bJdg",
    authDomain: "hybrid-formula-103716.firebaseapp.com",
    databaseURL: "https://hybrid-formula-103716.firebaseio.com",
    projectId: "hybrid-formula-103716",
    storageBucket: "hybrid-formula-103716.appspot.com",
    messagingSenderId: "126374114087"
};
firebase.initializeApp(config);
export default firebase;