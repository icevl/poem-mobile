import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    inactive: {
        opacity: 0.3
    },

    container: {
        flexDirection: 'row'
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
    }
});
