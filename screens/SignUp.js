import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { firebase } from "../firebase/config";
import Styles from "../Styles";
import { LogInScreen } from "./LogInScreen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (firebase.auth().currentUser) {
          firebase.auth().currentUser.updateProfile({
            displayName: phone.toString(10),
          });
        }
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setError(err.message);
            break;
          case "auth/weak-password":
            setError(err.message);
            break;
        }
      });
  };

  return (
    // <KeyBoardAwareScrollView>
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={Styles.container}>
          <Image source={require("../logo.jpeg")} style={Styles.logo} />
          <Text style={{ fontSize: 30, color: "#1da1f2", marginTop: "10%" }}>
            Sign Up for Speak
          </Text>
          <Text style={{ color: "red" }}>{error}</Text>
          <View style={{ width: "90%" }}>
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              style={Styles.chatText}
              onChangeText={(email) => setEmail(email)}
              clearButtonMode="always"
            />
            <TextInput
              placeholder="Phone Number"
              autoCapitalize="none"
              style={Styles.chatText}
              onChangeText={(phone) => setPhone(phone)}
              clearButtonMode="always"
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              autoCapitalize="none"
              style={Styles.chatText}
              onChangeText={(password) => setPassword(password)}
              clearButtonMode="always"
            />
          </View>
          <Button title="Sign Up" onPress={handleSignUp}/>
          <Button
            title="Already have an account? Login"
            onPress={() => props.navigation.navigate("LogIn")}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

export default SignUp;
