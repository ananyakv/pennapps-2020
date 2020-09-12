import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { firebase } from "/Users/angela/Documents/GitHub/pennapps-2020/firebase/config.js";
import Chat from "/Users/angela/Documents/GitHub/pennapps-2020/screens/Chat.js";

function PhoneCall() {
  const [phoneNum, setPhoneNum] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    firebase
      .database()
      .ref("queue")
      .once("value")
      .then(function (snapshot) {
        console.log(snapshot.val());
        if (snapshot.exists()) {
          var name = snapshot.val();
          setTime(Object.keys(name)[0]);
          name = Object.values(name);
          setPhoneNum(name[0]);
          //delete from queue
          // firebase
          //   .database()
          //   .ref("queue/" + time)
          //   .remove();
        }
      });
  }, []);
  console.log(time);
  console.log(phoneNum);
  return (
    <Text>
      <Chat phoneNum={phoneNum}></Chat>
    </Text>
  );
}
export default PhoneCall;
