import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Connecting from "./screens/Connecting";
import BotMultiline from "./screens/Bot";
import Chat from "./screens/Chat";
import LogInScreen from "./screens/LogInScreen";
import SignUp from "./screens/SignUp";
// import LandingScreen from "./screens/LandingScreen";
// import PhoneCall from "./PhoneCall.js";
// import Styles from "./Styles";
import SpeechToTextButton from "./SpeechToTextButton";

import * as firebase from "firebase";
// import * as firebaseui from "firebaseui";
// import auth from "@react-native-firebase/auth";

const Stack = createStackNavigator();

// const handleLogIn = () => {
//   console.log("hi", user);
//   firebase
//     .auth()
//     .signInWithPhoneNumber(phoneNum)
//     .catch((err) => {
//       switch (err.code) {
//         case "auth/invalid-phoneNum":
//           setPhoneError(err.message);
//           break;
//       }
//     });
// };

function App() {
  const [isLogged, setIsLogged] = useState();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsLogged(user);
    });
  });

  if (!isLogged) {
    console.log("user");
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="LogIn"
            component={LogInScreen}
            options={{ header: () => null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="Connecting"
            component={Connecting}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="Bot"
            component={BotMultiline}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="SpeechToTextButton"
            component={SpeechToTextButton}
            options={{ header: () => null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
