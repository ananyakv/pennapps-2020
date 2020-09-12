import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';

import { Linking } from "react-native";
// import { SafeAreaView, Text, Button, TouchableOpacity } from "react-native";
import Communications from "react-native-communications";

class Chat extends React.Component {
    render() {
        return (
            // <View>
            //     <Text>Chat</Text> 

            //     <Button
            //         title="Back to home"
            //         onPress={() =>
            //             this.props.navigation.navigate('Home')
            //         }
            //     />
            // </View>
            <SafeAreaView>
                <TouchableOpacity
                    onPress={() => Communications.phonecall("4088968867", true)}
                >
                    <Text>Make phonecall</Text>
                </TouchableOpacity>
                <Button
                    title="Back to home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                />
            </SafeAreaView>
        );
    }
}

// ...

export default Chat;