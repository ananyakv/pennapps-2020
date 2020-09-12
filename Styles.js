import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f8fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 65,
        color: '#1da1f2',
        marginTop: 30,
        marginBottom: 70,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    buttonBackgroundBlue: {
        backgroundColor: '#1da1f2',
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 30,
        margin: 3,
    },
    buttonBackgroundGray: {
        backgroundColor: '#aab8c2',
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 30,
        marginTop: 15,
    },
    buttonText: {
        color: '#f5f8fa',
        fontSize: 18,
        fontWeight: '400',
    },
    chatText: {
        fontSize: 16,
        height: 40,
        borderWidth: 1,
        borderColor: '#e1e8ed',
        paddingLeft: 20,
        borderRadius: 20,
        margin: 5,
    },
    header: {
        backgroundColor: '#f5f8fa',
    }
})