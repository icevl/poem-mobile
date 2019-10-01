import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    containter: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    fixed: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },

    scrollView: {
        backgroundColor: 'transparent'
    }
});
