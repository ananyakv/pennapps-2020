import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
// import { proc } from 'react-native-reanimated';

const firebaseConfig = {
  apiKey: "AIzaSyAhGkp4N92_cg7YbooiWPqRlkBXsZnE4KA",
  authDomain: process.env.authDomain,
  databaseURL: "https://pennapps2020-eac03.firebaseio.com",
  //   databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
