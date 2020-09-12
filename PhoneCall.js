import React from "react";
import { Linking } from "react-native";
import { SafeAreaView, Text, Button, Opacity } from "react-native";
import Communications from "react-native-communications";

function PhoneCall() {
  return (
    <SafeAreaView>
      <Opacity
        onPress={() => Communications.phonecall("4088968867", true)}
      >
        <Text>Make phonecall</Text>
      </Opacity>
    </SafeAreaView>
  );
}
export default PhoneCall;
