import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import { Linking } from "react-native";
// import { SafeAreaView, Text, Button, TouchableOpacity } from "react-native";
import Communications from "react-native-communications";
import { firebase } from "../firebase/config";

function Chat (props) {
  const [messages, setMessages] = useState([])

  const [value, onChangeText] = React.useState('');

  if (props.route.params) {
    const phone = props.route.params.phone;
  }

  const getRef = () => {
    return firebase.database().ref('messages/8326528580');
  }

  const on = callback => {
    getRef().limitToLast(20).on('child_added', snapshot => callback(parse(snapshot)));
  }

  const parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;

    const timestamp = new Date(numberStamp);

    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  const off = () => {
    getRef().off()
  }

  const getUid = () => {
    return "anon";
  }

  const getTimestamp = () => {
    return firebase.database().ServerValue.TIMESTAMP;
  }

  const send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  const append = message => {
    this.ref.push(message);
  }

  // populate messages
  useEffect(() => {
    // firebase.shared.on(message =>
    //   this.setState(previousState => ({
    //     messages: GiftedChat.append(previousState.messages, message),
    //   }))
    // );
  });

  return (
    <SafeAreaView>
      <Button
        title={"make phone call"}
        onPress={() => Communications.phonecall(phone, true)}
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
    backgroundColor: "#CCFFCC",
    marginHorizontal: 20,
    height: "70%",
  },
  text: {
    fontSize: 35,
  },
});

export default Chat;
