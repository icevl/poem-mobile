import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        zIndex: 3,
        backgroundColor: 'rgba(00, 00, 00, 0.6)',
        width: '100%',
        height: '100%'
    },

    menuWrapper: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        width: '100%',
        paddingBottom: 10
    },

    menuItemWrapper: {
        flexDirection: 'row',
        height: 60,
        paddingLeft: 10,
        paddingRight: 15,
        alignItems: 'center',
        opacity: 0.7
    },

    menuItemIconWrapper: {
        width: 43
    },

    menuItemTextWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 1
    },

    title: {
        fontSize: 16
    },

    description: {
        fontSize: 14
    }
});
