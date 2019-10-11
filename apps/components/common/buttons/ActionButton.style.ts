import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../../../config';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        opacity: 0.3,
        marginRight: 30,
        justifyContent: 'center'
    },

    icon: {
        flexDirection: 'column',
        color: '$cardText'
    },

    label: {
        flexDirection: 'column',
        color: '$cardText',
        fontWeight: 'bold',
        fontSize: config.size.text,
        marginLeft: 8,
        textAlign: 'center'
    },

    textWrapper: {
        justifyContent: 'center'
    },

    active: {
        color: '$primary',
        opacity: 0.9
    }
});
