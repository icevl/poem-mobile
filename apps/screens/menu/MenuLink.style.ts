import { StyleSheet } from 'react-native';
import config from '../../../config';

export default StyleSheet.create({
    content: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 13,
        marginBottom: 13
    },

    text: {
        marginLeft: 18,
        color: config.colors.normalText,
        fontSize: 22,
        fontWeight: 'bold'
    },

    icon: {
        color: '#777777'
    }
});
