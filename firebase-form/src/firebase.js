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

const firebaseDB = firebase.database();

firebaseDB.ref().set({
    name: 'Sandip',
    lastName: 'Pal',
    age: 30,
    car : {
        brand: 'Volvo',
        color: 'Black'
    }
});

firebaseDB.ref('age').set(40);

firebaseDB.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
});

firebaseDB.ref().on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

firebaseDB.ref().on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

firebaseDB.ref().on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});