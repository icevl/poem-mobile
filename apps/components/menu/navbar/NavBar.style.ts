import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import Theme from '../../../../themes';

const theme = Theme();

export default StyleSheet.create({
    container: {
        width: '100%',
        height: Platform.OS === 'ios' ? 60 : 53,
        backgroundColor: theme.color.navbarBackground,
        flexDirection: 'row'
    },

    leftIcon: {
        paddingTop: Platform.OS === 'ios' ? 18 : 15,
        paddingLeft: 12,
        color: theme.color.navbarText,
        opacity: 0.3
    },

    homeImage: {
        marginTop: 18,
        marginLeft: 15,
        width: 25,
        height: 25
    },

    title: {
        color: theme.color.navbarText,
        fontSize: 20
    },

    buttonContainer: {
        width: 60,
        height: '100%',
        marginLeft: 5
    }
});
