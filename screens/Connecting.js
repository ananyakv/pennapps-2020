import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Connecting extends React.Component {
    render() {
        return (
            <View>
                <Text>Connecting</Text>

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

export default Connecting;