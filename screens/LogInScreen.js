import React, { useState, useEffect } from "react";
import { Text, View, Button, TextInput, Image } from "react-native";
import { firebase } from "../firebase/config";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Styles from "../Styles";

function LogInScreen() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // confirmation code
  const [code, setCode] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function signInWithEmail() {
    console.log("hi");
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  // confirmation has not been sent
  if (!confirm) {
    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={Styles.container}>
          <Image source={require("../logo.jpeg")} style={Styles.logo} />
          <Text style={{ fontSize: 30, color: "#1da1f2", marginTop: "10%" }}>
            Log Into Speak
          </Text>
          <Text style={{ color: "red" }}>{emailError}</Text>
          <Text style={{ color: "red" }}>{passwordError}</Text>
          <View style={{ width: "90%" }}>
            <TextInput
              placeholder="Email"
              required
              style={Styles.chatText}
              value={email}
              onChangeText={(email) => setEmail(email)}
              clearButtonMode="always"
            />
            <TextInput
              placeholder="Password"
              required
              secureTextEntry
              style={Styles.chatText}
              value={password}
              onChangeText={(password) => setPassword(password)}
              clearButtonMode="always"
            />
          </View>
          <Button
            color="#0693E3"
            title="Log In"
            id="LogIn"
            onPress={signInWithEmail}
          ></Button>
        </View>
      </KeyboardAwareScrollView>
    );
  }

  // return (
  //   <>
  //     <TextInput value={code} onChangeText={(text) => setCode(text)} />
  //     <Button title="Confirm Code" onPress={() => confirmCode()} />
  //   </>
  // );
}

export default LogInScreen;
