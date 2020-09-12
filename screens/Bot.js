import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Keyboard, TouchableWithoutFeedback, Slider } from 'react-native';
import * as Speech from 'expo-speech';
import Styles from '../Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

const Bot = (props) => {
    const [language, setLanguage] = React.useState('en');
    return (
        <View>
            <TextInput
                {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable
                style={Styles.chatText}
                clearButtonMode='always'
            />

            {/* <DropDownPicker
                items={[
                    { label: 'English', value: 'en' },
                    { label: 'Spanish', value: 'es-419' },
                    { label: 'German', value: 'gsw-u-sd-chzh' }
                ]}
                defaultIndex={0}
                containerStyle={{ height: 40 }}
                onChangeItem={item => setLanguage(item)}
                placeholder='Select a language'
            /> */}
        </View>
    );
}

const BotMultiline = (props) => {
    const [value, onChangeText] = React.useState('');
    const [lang, setLanguage] = React.useState('en');
    const [currentPitch, setPitch] = React.useState(1.0)

    return (

        < TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <TouchableOpacity onPress={() => Speech.speak(value, { language: lang, pitch: currentPitch }/*{ pitch: 2 }*/)}>
                    <View style={Styles.buttonBackgroundBlue}>
                        <Text style={Styles.buttonText}>
                            Speak
                        </Text>
                    </View>
                </TouchableOpacity>

                <Button onPress={() => Speech.pause()} title="Pause" />
                <Button onPress={() => Speech.resume()} title="Resume" />
                <Button onPress={() => Speech.stop()} title="Stop" />

                <View style={{ width: '90%', padding: '1%' }}>
                    <Bot
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholder="Type here"
                    />
                    <DropDownPicker
                        items={[
                            { label: 'English', value: 'en' },
                            { label: 'Spanish', value: 'es-419' },
                            { label: 'German', value: 'gsw-u-sd-chzh' }
                        ]}
                        defaultIndex={0}
                        containerStyle={{ height: 40 }}
                        onChangeItem={item => setLanguage(item.value)}
                        placeholder='Select a language'
                    />
                    <Text>Pitch:</Text>
                    <Slider
                        maximumValue={2}
                        minimumValue={1}
                        step={0.01}
                        // value={currentPitch}
                        onValueChange={(item) => setPitch(item)}
                        width='100%'
                    />
                </View>
            </View>
        </TouchableWithoutFeedback >

    );
}

export default BotMultiline;
