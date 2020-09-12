import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import Styles from "../Styles";

const Bot = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            // maxLength={40} 
            maxHeight={300}
        />
    );
}

const BotMultiline = (props) => {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={{ marginTop: '10%', }}>
            <Button
                title="Speak"
                onPress={() => Speech.speak(value)}
                style={Styles.buttonbackground1}
            />
            <View
                style={{
                    // backgroundColor: value,
                    // borderBottomColor: '#000000',
                    // borderBottomWidth: 1,
                    paddingTop: '18%',
                    paddingLeft: '10%'
                }}>
                <Bot
                    multiline
                    // numberOfLines={4}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    placeholder="Type here"
                />
            </View>

            {/* <Button
                title="Back to home"
                onPress={() =>
                    props.navigation.navigate('Home')
                }
            /> */}
        </View>
    );
}

export default BotMultiline;
