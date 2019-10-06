import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../../../config';

export default EStyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: config.size.bottomBar,
        backgroundColor: '$bottombarBackground',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '$bottombarBorder'
    }
});
