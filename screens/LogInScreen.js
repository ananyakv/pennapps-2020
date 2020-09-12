import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";

function LogInScreen(props) {
  console.log(props.handleLogIn);
  return (
    <View>
      <Text>Log In Screen</Text>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          autoFocus
          required
          value={props.phoneNum}
          onChange={(e) => props.setPhoneNum(e.target.value)}
        />
        <p>{props.phoneNum}</p>
        <Button
          color="black"
          title="Log In"
          onClick={props.handleLogIn}
        ></Button>
      </div>
    </View>
  );
}
export default LogInScreen;
