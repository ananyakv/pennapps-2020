import React, { useState, useEffect, useCallback } from "react";
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
import Styles from "../Styles";
import { GiftedChat } from "react-native-gifted-chat";

import { Linking } from "react-native";
// import { SafeAreaView, Text, Button, TouchableOpacity } from "react-native";
import Communications from "react-native-communications";
import { firebase } from "../firebase/config";

function Chat (props) {
  const [messages, setMessages] = useState([]);
  const [phone, setPhone] = useState(props.route.params.phone.toString(10))
  const [callPhone, setCallPhone] = useState(props.route.params.phone.toString(10))
  const [user, setUser] = useState({
    _id: props.route.params.user == "requester" ? 0:1,
    name: props.route.params.user
  })

  useEffect(() => {
    // populate messages
    getRef().limitToLast(20).on('child_added', (snapshot) => {
      parse(snapshot)});
    firebase.database().ref('messages/' + phone + '/0/phoneNum2').on('value', (snapshot) => {
      if(snapshot.exists() && user == "requester") {
        setCallPhone(snapshot.val());
      }
    });
    // stop listening for database changes on unmount
    return () => {
      firebase.database().ref('messages/' + phone + '/0/phoneNum2').off();
      getRef().off();
    };
  },[]);

  const getRef = () => {
    return firebase.database().ref('messages/' + phone);
  }

  const parse = (snapshot) => {
    setMessages(messages => [...messages, snapshot.val()])
  };

  const getDate = () => {
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth(); //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds
    return new Date(year, month, date, hours, min, sec);
}

const getDateVal = (dateString) => {
  return new Date(dateString);
}

  const onSend = msgs => {
    for (let i = 0; i < msgs.length; i++) {
      const { text, user } = msgs[i];
      const message = {
        text: text,
        user: user,
        createdAt: getDate().toString(),
        _id: messages.length
      };
      firebase.database().ref('messages/' + phone + "/"+ messages.length).set(message);
    }
  };

  return (
    <>
    <View style={{alignItems: "center", marginTop: '15%'}}>
    <TouchableOpacity onPress={() => Communications.phonecall(callPhone, true)}>
        <View style={Styles.buttonBackgroundBlue}>
          <Text style={Styles.buttonText}>
            Make phone call
          </Text>
        </View>
    </TouchableOpacity>
    </View>

    <GiftedChat messages={messages.sort(function(a,b){return getDateVal(b.createdAt) - getDateVal(a.createdAt)})} onSend={messages => onSend(messages)} user={user}/>
    </>
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