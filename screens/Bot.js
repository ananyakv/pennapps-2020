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

// const Bot = () => (
//     <Button title="Speak!" onPress={() => Speech.speak('Hello World!')} />
//     <Button
//         title="Back to home"
//         onPress={() =>
//             this.props.navigation.navigate('Home')
//         }
//     />
// );

// export default Bot; 

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
        <div>
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
            {console.log("onCT", onChangeText)}
            {console.log(value)}
            <Button
                title="Back to home"
                onPress={() =>
                    this.props.navigation.navigate('Home')
                }
            />
        </div>
    );
}

export default BotMultiline;
