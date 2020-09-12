// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// import Tts from 'react-native-tts';

// class Bot extends React.Component {
//     render() {
//         return (
//             <View>
//                 <Text>Bot</Text>
//                 <Button
//                     title="Back to home"
//                     onPress={() =>
//                         this.props.navigation.navigate('Home')
//                     }
//                 />
//             </View>
//         );
//     }
// }

import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import * as Speech from 'expo-speech'

const Bot = () => (
    <Button title="Speak!" onPress={() => Speech.speak('Hello World!')} />
    <Button
        title="Back to home"
        onPress={() =>
            this.props.navigation.navigate('Home')
        }
    />
);

export default Bot;