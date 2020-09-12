import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Chat extends React.Component {
    render() {
        return (
            <View>
                <Text>Chat</Text>

                <Button
                    title="Back to home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                />
            </View>
        );
    }
}

// ...

export default Chat;