import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
// import { proc } from 'react-native-reanimated';

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
<<<<<<< HEAD
    databaseURL: 'https://pennapps2020-eac03.firebaseio.com',
=======
    databaseURL: "https://pennapps2020-eac03.firebaseio.com",
    //   databaseURL: process.env.databaseURL,
>>>>>>> 3bf1c776a6fd0a626926f5288bd4a5a8ecabe803
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
<<<<<<< HEAD
    measurementId: process.env.measurementId
=======
    measurementId: process.env.measurementId,
>>>>>>> 3bf1c776a6fd0a626926f5288bd4a5a8ecabe803
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
