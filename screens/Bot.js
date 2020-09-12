import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as Speech from 'expo-speech';
import Styles from "../Styles";

const Bot = (props) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <TextInput
                {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable
                maxHeight={300}
                keyboardType='default'
            />
        </TouchableWithoutFeedback>
    );
}

const BotMultiline = (props) => {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={{ marginTop: '10%' }}>
            <Button
                title="Speak"
                onPress={() => Speech.speak(value)}
                style={Styles.buttonbackground1}
            />
            <View
                style={{
                    padding: '5%',
                }}>
                <Bot
                    multiline
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    placeholder="Type here"
                />
            </View>
        </View>
    );
}

export default BotMultiline;
