import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import * as Speech from "expo-speech";
import Styles from "../Styles";
import DropDownPicker from "react-native-dropdown-picker";

const Bot = (props) => {
  const [language, setLanguage] = React.useState("en");
  return (
    <View>
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        style={Styles.chatText}
        clearButtonMode="always"
      />
    </View>
  );
};

const BotMultiline = (props) => {
  const [value, onChangeText] = React.useState("");
  const [lang, setLanguage] = React.useState("en");
  const [currentPitch, setPitch] = React.useState(1.0);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: "row-reverse",
            marginVertical: "15%",
            marginHorizontal: "5%",
          }}
        >
          <DropDownPicker
            items={[
              { label: "English", value: "en" },
              { label: "Spanish", value: "es-419" },
              { label: "German", value: "gsw-u-sd-chzh" },
            ]}
            defaultIndex={0}
            onChangeItem={(item) => setLanguage(item.value)}
            placeholder="Select a language"
            containerStyle={{ height: 40, width: 200 }}
            placeholderStyle={{ color: "#aab8c2" }}
          />
        </View>

        <View style={{ alignItems: "center", marginTop: "55%" }}>
          <TouchableOpacity
            onPress={() => Speech.speak(value, { language: lang })}
          >
            <View style={Styles.buttonBackgroundBlue}>
              <Text style={Styles.buttonText}>Speak</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ padding: "2%" }}>
          <Bot
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="Type here"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
