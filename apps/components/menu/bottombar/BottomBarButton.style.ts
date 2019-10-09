import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        opacity: 0.4
    },

    icon: {
        color: '$bottombarText',
        textAlign: 'center',
        fontWeight: 'normal'
    },

    active: {
        color: '$bottombarActive',
        opacity: 1
    }
});
