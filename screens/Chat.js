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
  const [phone, setPhone] = useState(props.route.params.phone.toString(10))
  const [user, setUser] = useState(props.route.params.user)

  const getRef = () => {
    return firebase.database().ref('messages/' + phone);
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

  const getTimestamp = () => {
    return firebase.database().ServerValue.TIMESTAMP;
  }

  const send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      
      const message = {
        text,
        user,
        timestamp: timestamp,
      };
      setMessages(messages => [...messages, message]);
    }
  };

  const append = message => {
    this.ref.push(message);
  }

  useEffect(() => {
    // populate messages
    firebase.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
    // stop listening for database changes on unmount
    return firebase.off();
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
    <GiftedChat messages={messages} onSend={firebase.send} user={user}>
    </GiftedChat>
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
