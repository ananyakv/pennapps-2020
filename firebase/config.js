import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
// import { proc } from 'react-native-reanimated';

const firebaseConfig = {
<<<<<<< HEAD
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: "https://pennapps2020-eac03.firebaseio.com",
    //   databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
=======
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
>>>>>>> 5a005e2599e5aa39c3188c1063e42d2bc35f5299
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
