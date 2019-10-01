import { StyleSheet, Dimensions } from 'react-native';
import config from '../../../config';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 6
    },

    labelWrapper: {
        flexDirection: 'column',
        width: 100
    },

    progressWrapper: {
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center'
    },

    title: {
        justifyContent: 'flex-start',
        textAlign: 'right',
        marginRight: 10,
        fontSize: 14,
        color: config.colors.normalText
    },

    progress: {
        justifyContent: 'flex-end',
        borderRadius: 2,
        backgroundColor: config.colors.normalText,
        height: 10,
        width: Dimensions.get('window').width - 260
    }
});
