import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import Theme from '../../../../themes';

const theme = Theme();

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: Platform.OS === 'ios' ? 60 : 53,
        backgroundColor: theme.color.bottombarBackground,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: theme.color.bottombarBorder
    }
});
