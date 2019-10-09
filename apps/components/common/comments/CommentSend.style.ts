import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '$bottombarBackground',
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },

    inputWrapper: {
        flexGrow: 1,
        flexDirection: 'column'
    },

    buttonWrapper: {
        width: 60,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 15
    },

    sendIcon: {
        color: '$primary'
    }
});
