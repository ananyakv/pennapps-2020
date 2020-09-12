import React from "react";
import { StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Connecting from "./screens/Connecting";
import BotMultiline from "./screens/Bot";
import Chat from "./screens/Chat";
import PhoneCall from "/Users/angela/Documents/GitHub/pennapps-2020/PhoneCall.js";
import Styles from "./Styles";

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Connecting" component={Connecting} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Bot" component={BotMultiline} />
        </Stack.Navigator>
        <PhoneCall />
      </NavigationContainer>
    );
  }
}

export default App;
