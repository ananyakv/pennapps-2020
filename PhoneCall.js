import React from "react";
import { Linking } from 'react-native';
import { SafeAreaView, Text } from 'react-native';


function PhoneCall() {
    return (
        <SafeAreaView>
            <Text>Page Content</Text>
            {/* Linking.openURL(`tel:${phoneNumber}`); */}
        </SafeAreaView>
    );
}
export default PhoneCall;