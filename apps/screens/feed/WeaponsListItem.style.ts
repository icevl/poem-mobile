import { StyleSheet } from 'react-native';
import config from '../../../config';

export default StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 20,
        backgroundColor: 'rgba(17, 18, 21, 0.3)',
        marginBottom: 3,
        flex: 1,
        flexDirection: 'row'
    },

    image: {
        position: 'absolute',
        top: -10,
        left: 0,
        width: 120,
        height: 80
    },

    title: {
        marginTop: 65,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4,
        color: config.colors.normalText,
        fontSize: 13,
        fontWeight: 'bold',
        width: 120,
        backgroundColor: 'rgba(00, 00, 00, 0.3)'
    },

    picture: {
        flexDirection: 'column',
        width: 130,
        flexBasis: 130
    },

    info: {
        flexDirection: 'column',
        flexGrow: 1
    }
});
