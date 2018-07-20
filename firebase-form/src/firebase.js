import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC3g00QFWVQW-PI_aHf8PjKUz-6w2aqizk",
    authDomain: "form-tests.firebaseapp.com",
    databaseURL: "https://form-tests.firebaseio.com",
    projectId: "form-tests",
    storageBucket: "form-tests.appspot.com",
    messagingSenderId: "664237075077"
};

firebase.initializeApp(config);
  
firebase.database().ref().set('its work!');
