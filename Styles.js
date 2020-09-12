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
        marginTop: 50,
        marginBottom: 60,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    buttonBackground1: {
        backgroundColor: '#1da1f2',
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 30,
        margin: 3,
    },
    buttonBackground2: {
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
    }  
})