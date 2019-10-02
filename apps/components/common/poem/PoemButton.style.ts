import { StyleSheet } from 'react-native';
import Theme from '../../../../themes';
import config from '../../../../config';

const theme = Theme();

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        opacity: 0.2,
        marginRight: 30
    },

    icon: {
        flexDirection: 'column',
        color: theme.color.cardText
    },

    label: {
        flexDirection: 'column',
        color: theme.color.cardText,
        fontWeight: 'bold',
        fontSize: config.size.text,
        marginLeft: 8
    },

    active: {
        color: theme.color.primary,
        opacity: 0.9
    }
});
