import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        opacity: 0.7
    },

    labelWrapper: {
        flexDirection: 'column'
    },

    textWrapper: {
        flexDirection: 'column'
    },

    label: {
        color: '$cardText',
        fontWeight: 'bold'
    },

    text: {
        paddingLeft: 5,
        color: '$cardText'
        // textDecorationLine: 'underline'
    }
});
