import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';

export default EStyleSheet.create({
    container: {
        width: '100%',
        height: Platform.OS === 'ios' ? 60 : 53,
        backgroundColor: '$navbarBackground',
        flexDirection: 'row',
        textAlign: 'center'
    },

    menuIcon: {
        color: '$navbarText'
    },

    logoImage: {
        position: 'absolute',
        top: 7,
        left: 20,
        width: 70,
        height: 40
    },

    leftIconWrapper: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        width: 25,
        marginLeft: 20
    },

    leftIcon: {
        color: '$navbarText'
    },

    titleWrapper: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        flex: 1,
        flexGrow: 1,
        marginLeft: 20
    },

    title: {
        fontFamily: 'Electrolize',
        color: '$navbarText',
        fontSize: 21,
        textAlign: 'left',
        opacity: 0.8
    },

    rightIconWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 14
    }
});
