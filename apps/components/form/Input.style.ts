import { StyleSheet } from 'react-native';
import Theme from '../../../themes';

const theme = Theme();

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: theme.color.poemBackground,
        padding: 10
    },

    inputWrapper: {},

    input: {
        backgroundColor: 'transparent',
        color: theme.color.cardText
    }
});
