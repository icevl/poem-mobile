import { StyleSheet } from 'react-native';
import Theme from '../../../../themes';

const theme = Theme();

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        opacity: 0.4
    },

    icon: {
        color: theme.color.bottombarText,
        textAlign: 'center',
        fontWeight: 'normal'
    },

    active: {
        color: theme.color.bottombarActive,
        opacity: 0.9
    }
});
