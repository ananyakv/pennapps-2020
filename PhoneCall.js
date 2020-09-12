import React from "react";
import { Linking } from "react-native";
import { SafeAreaView, Text, Button, TouchableOpacity } from "react-native";
import Communications from "react-native-communications";

function PhoneCall() {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => Communications.phonecall("4088968867", true)}
      >
        <Text>Make phonecall</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default PhoneCall;
