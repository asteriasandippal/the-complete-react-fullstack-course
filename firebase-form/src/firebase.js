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

// firebaseDB.ref('user').push({
//     name: 'Akash',
//     lastName: 'Kumar',
//     age: 31,
//     car : {
//         brand: 'Volvo',
//         color: 'Black'
//     }
// });

// firebaseDB.ref('user').once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//         const users = [];
//         snapshot.forEach((childSnapshot) => {
//             users.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(users);
//     });

firebaseDB.ref('user').orderByChild('lastName').equalTo('Kumar').once('value')
    .then((snapshot) => {
        console.log(snapshot.val());
    })