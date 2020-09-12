import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Alert } from "react-native";
import { firebase } from "./firebase/config.js";
import Chat from "./screens/Chat.js";

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
        firebase
          .database()
          .ref("queue/" + firstKey)
          .remove();
        firebase
          .database()
          .ref("queue/count")
          .once("value", (snapshot) => {
            var count = snapshot.val() - 1;
            firebase.database().ref("queue/count").set(count);
          });
          Alert.alert(
          "Match Found!",
          "You will be connected with the first user in the queue",
          [
              { text: "OK", onPress: () => {props.navigation.navigate('Chat', { phone: phone, user:"volunteer" })} }
          ],
          { cancelable: false }
        );
      }
    });
}
export default PhoneCall;
