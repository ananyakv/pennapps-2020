import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Alert } from "react-native";
import { firebase } from "./firebase/config.js";
import Chat from "./screens/Chat.js";

const getDate = () => {
  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth(); //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  var sec = new Date().getSeconds(); //To get the Current Seconds
  return new Date(year, month, date, hours, min, sec);
}

function PhoneCall(props) {
  var phone = 0;
  // const [phoneNum, setPhoneNum] = useState("");
  // const [time, setTime] = useState("");

  firebase
    .database()
    .ref("queue")
    .orderByKey()
    .limitToFirst(1)
    .once("value", (snapshot) => {
      if (snapshot.exists()) {
        var firstKey = Object.keys(snapshot.val())[0];
        phone = snapshot.val()[firstKey].phone;
        if (firstKey != "count") {
          firebase
            .database()
            .ref("queue/" + firstKey)
            .remove();
        }
        firebase
          .database()
          .ref("queue/count")
          .once("value", (snapshot) => {
            var count = snapshot.val() - 1;
            if (count >= 0) {
              firebase.database().ref("queue/count").set(count);
            }
          });
          if(phone) {
            Alert.alert(
              "Match Found!",
              "You will be connected with the first user in the queue",
              [
                  { text: "OK", onPress: () => {
                    props.navigation.navigate('Chat', { phone: phone, user:"volunteer" })
                    const initialMsg = {
                      _id: -1,
                      text: "A user has joined the chat!",
                      createdAt: getDate().toString(),
                      user: {
                        _id: 1,
                        name: "volunteer",
                      },
                    };
                    firebase
                      .database()
                      .ref("messages/" + phone)
                      .push(initialMsg);
                    firebase.database().ref("messages/" + phone +"/0/phoneNum2")
                    .set(firebase.auth().currentUser.displayName);
                  } }
              ],
              { cancelable: false }
            );
          }
          else {
            Alert.alert(
              "Queue is Empty",
              "Thanks for checking in!",
              [
                  { text: "OK", onPress: () => {} }
              ],
              { cancelable: false }
            );
          }
      }
    });
}
export default PhoneCall;
