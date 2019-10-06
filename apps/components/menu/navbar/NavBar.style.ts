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
        // paddingTop: Platform.OS === 'ios' ? 18 : 15,
        // paddingLeft: 12,
        color: '$navbarText'
        // opacity: 0.3
    },

    logoImage: {
        position: 'absolute',
        top: 7,
        left: 20,
        width: 70,
        height: 40
    },

    titleWrapper: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        flex: 1
    },

    title: {
        fontFamily: 'Nautilus',
        color: '$navbarText',
        fontSize: 21,
        textAlign: 'center',
        opacity: 0.8
    },

    rightIconWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 14
    },

    buttonContainer: {
        // width: 60,
        // height: '100%',
        // marginLeft: 5
    }
});
