import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { firebase } from "../firebase/config";

function LogInScreen(props) {
  // firebase.auth().languageCode = "it";
  // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("LogIn", {
  //   size: "invisible",
  //   callback: function (response) {
  //     // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     onSignInSubmit();
  //   },
  // });

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // confirmation code
  const [code, setCode] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  // Handle the button press
  // function signInWithPhoneNumber() {
  //   var appVerifier = window.recaptchaVerifier;
  //   const confirmation = firebase
  //     .auth()
  //     .signInWithPhoneNumber(phone, appVerfier)
  //     .then(function (confirmationResult) {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       window.confirmationResult = confirmationResult;
  //     })
  //     .catch(function (error) {
  //       // Error; SMS not sent
  //       window.recaptchaVerifier.render().then(function (widgetId) {
  //         grecaptcha.reset(widgetId);
  //       });
  //     });
  //   console.log("hi", phone);
  //   // props.setPhoneNum(phone);
  // }

  function signInWithEmail() {
    console.log("hi");
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
    // console.log(email, password);
  }

  // confirmation has not been sent
  if (!confirm) {
    return (
      <View>
        <Text>Log In Screen</Text>
        <Text style={{ color: "red" }}>{emailError}</Text>
        <Text style={{ color: "red" }}>{passwordError}</Text>
        <div>
          <label>Email</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="text"
            autoFocus
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            color="black"
            title="Log In"
            id="LogIn"
            // onPress={() => console.log("hi")}
            onPress={signInWithEmail}
          ></Button>
        </div>
      </View>
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={(text) => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

export default LogInScreen;
