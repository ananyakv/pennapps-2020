import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { firebase } from "../firebase/config";
import { LogInScreen } from "./LogInScreen";

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
        console.log("current", firebase.auth().currentUser);
        console.log("user", user);
        if (firebase.auth().currentUser) {
          firebase.auth().currentUser.updateProfile({
            displayName: phone.toString(10),
            phoneNumber: phone,
          });
          //   console.log("keys bracket ", user.user[displayName]);
          console.log(user.user[10]);
          //   console.log('phoneNumuser.user.phoneNumber);
          for (var key in user.user) {
            user2 = user.user;
            console.log(key);
            if (user.hasOwnProperty(key)) {
              console.log(user2[key]);
            }
          }
          //   Object.keys(user.user).forEach(function (key) {
          //     console.log(key, user.user[key]);
          //   });
          //   console.log("hm", firebase.auth().currentUser.displayName);
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
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <Text style={{ color: "red" }}>{error}</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Phone Number"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={(phone) => setPhone(phone)}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={(password) => setPassword(password)}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button
        title="Already have an account? Login"
        onPress={() => props.navigation.navigate("LogInScreen")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
  },
});

export default SignUp;
