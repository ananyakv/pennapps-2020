import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as Speech from 'expo-speech';
import Styles from '../Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Bot = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            style={Styles.chatText}
            clearButtonMode='always'
        />
    );
}

const BotMultiline = (props) => {
    const [value, onChangeText] = React.useState('');

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <TouchableOpacity onPress={() => Speech.speak(value)}>
                    <View style={Styles.buttonBackgroundBlue}>
                        <Text style={Styles.buttonText}>
                            Speak
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{ width: '90%', padding: '1%' }}>
                    <Bot
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholder="Type here"
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default BotMultiline;
