import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../../../config';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        opacity: 0.3,
        width: 75,
        justifyContent: 'center'
    },

    icon: {
        flexDirection: 'column',
        color: '$cardText',
        width: 30
    },

    label: {
        flexDirection: 'column',
        color: '$cardText',
        fontWeight: 'bold',
        fontSize: config.size.text,
        marginLeft: 8,
        // textAlign: 'center',
        width: 40
    },

    textWrapper: {
        justifyContent: 'center'
    },

    active: {
        color: '$primary',
        opacity: 0.9
    }
});
