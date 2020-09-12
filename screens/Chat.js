import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView
} from "react-native";
import { GiftedChat } from 'react-native-gifted-chat';

import { Linking } from "react-native";
// import { SafeAreaView, Text, Button, TouchableOpacity } from "react-native";
import Communications from "react-native-communications";
import { firebase } from '../firebase/config';

function Chat (props) {
  const [messages, setMessages] = useState([])
  return (
    <SafeAreaView>
      <Button
        title="make phone call"
        onPress={() => Communications.phonecall("4088968867", true)}
      />

      <Button
        title="Back to home"
        onPress={() => props.navigation.navigate("Home")}
      />
    <GiftedChat messages={messages}>
    </GiftedChat>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={""}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#CCFFCC',
    marginHorizontal: 20,
    height: "70%"
  },
  text: {
    fontSize: 35,
  },
});


export default Chat;
