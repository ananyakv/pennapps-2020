import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { firebase } from "../firebase/config";
import Styles from "../Styles";
import PhoneCall from "../PhoneCall";
import SpeechToTextButton from "../SpeechToTextButton";

function HomeScreen(props) {
    const getDate = () => {
        var date = new Date().getDate(); //To get the Current Date
        var month = new Date().getMonth(); //To get the Current Month
        var year = new Date().getFullYear(); //To get the Current Year
        var hours = new Date().getHours(); //To get the Current Hours
        var min = new Date().getMinutes(); //To get the Current Minutes
        var sec = new Date().getSeconds(); //To get the Current Seconds
        return new Date(year, month, date, hours, min, sec);
    }

    const joinQueue = () => {
        firebase.database().ref('queue/count').once("value", snapshot => {
            var position = 1
            var phone = "4088968867"
            if (snapshot.exists()) {
                position = snapshot.val() + 1
            }
            const date = getDate();
            firebase.database().ref('queue/' + date).set({
                phone: 4088968867
            })
            firebase.database().ref('queue/count').set(position)
            var initialMsg = {
                _id: 0,
                text: "You have connected with a live user!", 
                createdAt: getDate(),
                user: {
                    _id: 0,
                    name: "requester"
                },
            } 
            firebase.database().ref('messages/' + phone).set([initialMsg])
            // Alert.alert(
            //     "Joined Queue!",
            //     "You are number " + position + " in the queue",
            //     [
            //         { text: "OK", onPress: () => {props.navigation.navigate('Chat', { phone:"4088968867", user:"requester" })} }
            //     ],
            //     { cancelable: false }
            // );
            props.navigation.navigate('Chat', { phone:"4088968867", user:"requester" });
        })
    }

    const matchUsers = () => {
        PhoneCall(props)
    }

  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={Styles.container}>
      <Image source={require("../logo.jpeg")} style={Styles.logo} />
      <Text style={Styles.title}>S p e a k</Text>
      <TouchableOpacity onPress={joinQueue}>
        <View style={Styles.buttonBackgroundBlue}>
          <Text style={Styles.buttonText}>
            Connect With a Hearing Volunteer
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Bot")}>
        <View style={Styles.buttonBackgroundBlue}>
          <Text style={Styles.buttonText}>Go to Text and Speech Bot</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={matchUsers}>
        <View style={Styles.buttonBackgroundGray}>
          <Text style={Styles.buttonText}>Volunteer to Help</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={signOut}>
        <View style={Styles.buttonBackgroundGray}>
          <Text style={Styles.buttonText}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;