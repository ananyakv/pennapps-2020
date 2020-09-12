import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { firebase } from "./firebase/config.js";
import Chat from "./firebase/config.js";

function PhoneCall() {
  const [phoneNum, setPhoneNum] = useState("");
  // const [time, setTime] = useState("");

  useEffect(() => {
    firebase
      .database()
      .ref("queue")
      .orderByKey()
      .limitToFirst(1)
      .once("value", (snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          var firstKey = Object.keys(snapshot.val())[0];
          var phone = snapshot.val()[firstKey].phone;
          setPhoneNum(phone);
          firebase
            .database()
            .ref("queue/" + firstKey)
            .remove();
          console.log(snapshot.val());
          firebase
            .database()
            .ref("queue/count")
            .once("value", (snapshot) => {
              var count = snapshot.val() - 1;
              firebase.database().ref("queue/count").set(count);
            });
        }
      });
  }, []);
  console.log(phoneNum);
  return <Text>{/* <Chat phoneNum={phoneNum}></Chat> */}</Text>;
}
export default PhoneCall;
