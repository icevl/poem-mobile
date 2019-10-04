import { StyleSheet } from 'react-native';
import Theme from '../../../../themes';
import config from '../../../../config';

const theme = Theme();

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: config.size.bottomBar,
        backgroundColor: theme.color.bottombarBackground,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: theme.color.bottombarBorder
    }
});
