import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    content: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 13,
        marginBottom: 13,
        opacity: 0.8
    },

    text: {
        marginLeft: 18,
        color: '$cardText',
        fontSize: 18
    },

    icon: {
        color: '#777777'
    }
});
