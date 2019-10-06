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
        width: '100%'
    },

    menuItemWrapper: {
        flexDirection: 'row',
        height: 50,
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

    description: {
        fontSize: 12
    }
});
