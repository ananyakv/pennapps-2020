import React from "react";
import { StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Connecting from "./screens/Connecting";
import BotMultiline from "./screens/Bot";
import Chat from "./screens/Chat";

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Connecting" component={Connecting} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Bot" component={BotMultiline} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
