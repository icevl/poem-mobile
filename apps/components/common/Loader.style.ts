import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
        // backgroundColor: 'rgba(00, 00, 00, 0.8)'
    },

    image: {
        width: 70,
        height: 70
    },

    wrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(00, 00, 00, 0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
