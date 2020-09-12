import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { firebase } from "../firebase/config";
import Styles from "../Styles";

function HomeScreen(props) {
  const getDate = () => {
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth(); //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds
    return new Date(year, month, date, hours, min, sec);
  };

  const joinQueue = () => {
    firebase
      .database()
      .ref("queue/count")
      .once("value", (snapshot) => {
        if (snapshot.exists()) {
          const position = snapshot.val() + 1;
          const date = getDate();
          firebase
            .database()
            .ref("queue/" + date)
            .set({
              phone: 4088968867,
            });
          firebase.database().ref("queue/count").set(position);
          Alert.alert(
            "Joined Queue!",
            "You are number " + position + " in the queue",
            [
              {
                text: "OK",
                onPress: () => {
                  props.navigation.navigate("Chat");
                },
              },
            ],
            { cancelable: false }
          );
        }
      });
  };
  return (
    <View style={Styles.container}>
      <TouchableOpacity>
        <View onPress={joinQueue} style={Styles.buttonBackground1}>
          <Text style={Styles.buttonText}>
            Connect With a Hearing Volunteer
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          onPress={() => props.navigation.navigate("Bot")}
          style={Styles.buttonBackground1}
        >
          <Text style={Styles.buttonText}>Go to Text and Speech Bot</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          onPress={() => props.navigation.navigate("Chat")}
          style={Styles.buttonBackground2}
        >
          <Text style={Styles.buttonText}>Volunteer to Help</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

//   return (
//     <View styles={styles.container}>
//       <Button title="Join Help Queue" onPress={joinQueue} />
//       <Button
//         title="Go to Bot"
//         onPress={() => props.navigation.navigate("Bot")}
//       />
//       <Button
//         title="Go to Chat"
//         onPress={() => props.navigation.navigate("Chat")}
//       />
//     </View>
//   );
// }

export default HomeScreen;
