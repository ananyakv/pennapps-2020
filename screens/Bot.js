import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

const Bot = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
        />
    );
}

const BotMultiline = () => {
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

    // If you type something in the text box that is a color, the background will change to that
    // color.
    return (
        <View>
            <View
                style={{
                    backgroundColor: value,
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                }}>
                <Bot
                    multiline
                    numberOfLines={4}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
            </View>

            <Button title="Speak!" onPress={() => Speech.speak(value)} />

            <Button
                title="Back to home"
                onPress={() =>
                    props.navigation.navigate('Home')
                }
            />
        </View>
    );
}

export default BotMultiline;
