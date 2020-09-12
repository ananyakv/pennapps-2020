// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './HomeScreen';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>Speak</Text>
//         <StatusBar style="auto" />
//       </View>
//       {/* <PhoneCall /> */}
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f8fa',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titleText: {
//     color: '#1da1f2',
//     fontWeight: 'bold',
//   },
// });
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
