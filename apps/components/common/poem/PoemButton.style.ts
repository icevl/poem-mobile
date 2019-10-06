import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../../../config';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
        opacity: 0.3,
        width: 70
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
        marginTop: 4
    },

    active: {
        color: '$primary',
        opacity: 0.9
    }
});
