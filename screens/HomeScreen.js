import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>You have (undefined) friends.</Text>

                <Button
                    title="Go to Connecting"
                    onPress={() =>
                        this.props.navigation.navigate('Connecting')
                    }
                />
                <Button
                    title="Go to Bot"
                    onPress={() =>
                        this.props.navigation.navigate('Bot')
                    }
                />
                <Button
                    title="Go to Chat"
                    onPress={() =>
                        this.props.navigation.navigate('Chat')
                    }
                />
            </View>
        );
    }
}

// ...

export default HomeScreen;