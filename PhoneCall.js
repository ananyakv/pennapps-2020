import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { firebase } from "/Users/angela/Documents/GitHub/pennapps-2020/firebase/config.js";

function PhoneCall() {
  const [phoneNum, setPhoneNum] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    firebase
      .database()
      .ref("queue")
      .once("value")
      .then(function (snapshot) {
        if (snapshot.exists()) {
          var name = snapshot.val();
          setTime(Object.keys(name)[0]);
          name = Object.values(name);
          //get the first person's number in queue
          setPhoneNum(name[0]);
          //delete from queue
          firebase
            .database()
            .ref("queue/" + time)
            .remove();
        }
      });
  }, "");
  console.log(time);
  console.log(phoneNum);
  return <Text>hi</Text>;
}
export default PhoneCall;
