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
import PhoneCall from "/Users/angela/Documents/GitHub/pennapps-2020/PhoneCall.js";
import Styles from "./Styles";

import * as firebase from "firebase";
import auth from "@react-native-firebase/auth";

function App() {
  const [user, setUser] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const Stack = createStackNavigator();

  const handleLogIn = () => {
    console.log("hi", user);
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNum)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-phoneNum":
            setPhoneError(err.message);
            break;
        }
      });
  };
  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <View>
      {user ? (
        <HomeScreen />
      ) : (
        <LogInScreen
          phoneNum={phoneNum}
          setPhoneNum={setPhoneNum}
          handleLogIn={handleLogIn}
          phoneError={phoneError}
        />
      )}
    </View>
  );

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator /*screenOptions={{ headerShown: false }}*/>
  //       <Stack.Screen
  //         name="Home"
  //         component={HomeScreen}
  //         options={{ header: () => null }}
  //       />
  //       <Stack.Screen
  //         name="Connecting"
  //         component={Connecting}
  //         options={{ header: () => null }}
  //       />
  //       <Stack.Screen
  //         name="Chat"
  //         component={Chat}
  //         options={{ header: () => null }}
  //       />
  //       <Stack.Screen
  //         name="Bot"
  //         component={BotMultiline}
  //         options={{ header: () => null }}
  //       />
  //     </Stack.Navigator>
  //     {/* <PhoneCall /> */}
  //   </NavigationContainer>
  // );
}

export default App;
