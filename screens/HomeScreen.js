import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { firebase } from '../firebase/config';
import styles from '../Styles';

function HomeScreen(props) {
    
    const joinQueue = () => { 
        firebase.database().ref('queue/count').once("value", snapshot => {
            if (snapshot.exists()) {
                const position = snapshot.val() + 1
                firebase.database().ref('queue/' + position).set({
                    phone: "243289"
                  })
                  console.log(position)
                  firebase.database().ref('queue/count').set(position)
                  Alert.alert(
                    "Joined Queue!",
                    "You are number " + position + " in the queue",
                    [
                      { text: "OK", onPress: () => {props.navigation.navigate('Chat')} }
                    ],
                    { cancelable: false }
                  );
            }
        })
    }

    return (
        <View styles={styles.container}>
            <Button
                title="Join Help Queue"
                onPress={joinQueue}
            />
            <Button
                title="Go to Bot"
                onPress={() =>
                    props.navigation.navigate('Bot')
                }
            />
            <Button
                title="Go to Chat"
                onPress={() =>
                    props.navigation.navigate('Chat')
                }
            />
        </View>
    );
};

export default HomeScreen;