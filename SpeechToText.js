import React, { Component } from 'react'
import {
    StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Platform,
} from 'react-native'
// import { Permissions, FileSystem } from 'expo'
import axios from 'axios'
import { Audio } from 'expo-av';
import Expo from 'expo';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

import AudioRecord from 'react-native-audio-record';

const recordingOptions = {
    android: {
        extension: '.m4a',
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        sampleRate: 44100,
        numberOfChannels: 1,
        bitRate: 128000,
    },
    ios: {
        extension: '.wav',
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
        sampleRate: 44100,
        numberOfChannels: 1,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#1e88e5',
        paddingVertical: 20,
        width: '90%',
        alignItems: 'center',
        borderRadius: 5,
        padding: 8,
        marginTop: 20,
    },
    text: {
        color: '#fff',
    }
})

export default class SpeechToTextButton extends Component {
    constructor(props) {
        super(props)
        this.recording = null
        this.state = {
            isFetching: false,
            isRecording: false,
            transcript: '',
        }
    }

    deleteRecordingFile = async () => {
        try {
            const info = await FileSystem.getInfoAsync(this.recording.getURI())
            await FileSystem.deleteAsync(info.uri)
        } catch (error) {
            console.log('There was an error deleting recorded file', error)
        }
    }

    getTranscription = async () => {
        this.setState({ isFetching: true })
        try {
            const { uri } = await FileSystem.getInfoAsync(this.recording.getURI())

            const formData = new FormData()
            formData.append('file', {
                uri,
                type: Platform.OS === 'ios' ? 'audio/x-wav' : 'audio/m4a',
                name: Platform.OS === 'ios' ? `${Date.now()}.wav` : `${Date.now()}.m4a`,
            })

            const { data } = await axios.post('http://localhost:3005/speech', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            this.setState({ transcript: data.transcript })
        } catch (error) {
            console.log('There was an error reading file', error)
            this.stopRecording()
            this.resetRecording()
        }
        this.setState({ isFetching: false })
    }

    startRecording = async () => {
        // request permissions to record audio
        const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
        // if the user doesn't allow us to do so - return as we can't do anything further :(
        if (status !== 'granted') return
        // when status is granted - setting up our state
        this.setState({ isRecording: true })

        // basic settings before we start recording,
        // you can read more about each of them in expo documentation on Audio
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: true,
        })
        const recording = new Audio.Recording()
        try {
            // here we pass our recording options
            await recording.prepareToRecordAsync(recordingOptions)
            // and finally start the record
            await recording.startAsync()
        } catch (error) {
            console.log(error)
            // we will take a closer look at stopRecording function further in this article
            this.stopRecording()
        }

        // if recording was successful we store the result in variable, 
        // so we can refer to it from other functions of our component
        this.recording = recording
    }

    resetRecording = () => {
        this.deleteRecordingFile()
        this.recording = null
    }

    handleOnPressOut = () => {
        this.stopRecording()
        this.getTranscription()
    }

    render() {
        const {
            isRecording, transcript, isFetching,
        } = this.state
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPressIn={this.startRecording}
                    onPressOut={this.handleOnPressOut}
                >
                    {isFetching && <ActivityIndicator color="#ffffff" />}
                    {!isFetching &&
                        <Text style={styles.text}>
                            {isRecording ? 'Recording...' : 'Start recording'}
                        </Text>
                    }
                </TouchableOpacity>
                <Text>
                    {`${transcript}`}
                </Text>
            </View>
        )
    }
}