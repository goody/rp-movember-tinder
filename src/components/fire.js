import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    "apiKey": "AIzaSyAqj1o039ffqVTm4j8tcBauwJE6Sanfduk",
    "databaseURL": "https://rp-movember-tinder.firebaseio.com",
    "storageBucket": "rp-movember-tinder.appspot.com",
    "authDomain": "rp-movember-tinder.firebaseapp.com",
    "messagingSenderId": "234806785055",
    "projectId": "rp-movember-tinder"
};
var fire = firebase.initializeApp(config);
export default fire;