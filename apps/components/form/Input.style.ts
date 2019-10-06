import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '$poemBackground',
        padding: 10
    },

    inputWrapper: {
        flex: 1
    },

    input: {
        color: '$cardText'
    }
});
