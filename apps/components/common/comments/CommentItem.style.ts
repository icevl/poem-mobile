import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';
import config from '../../../../config';

export default EStyleSheet.create({
    container: {
        paddingBottom: 20
    },

    authorRow: {
        flexDirection: 'row',
        height: 30
    },

    avatarWrapper: {
        flexDirection: 'column',
        width: 30,
        borderRadius: 15,
        overflow: 'hidden'
    },

    avatar: {
        width: 30,
        height: 30
    },

    authorWrapper: {
        height: 50,
        flexDirection: 'column',
        textAlign: 'center',
        marginLeft: 14,
        flexGrow: 1
    },

    authorNameWrapper: {
        flexDirection: 'row'
    },

    authorName: {
        color: '$cardText',
        fontSize: config.size.text - 2
    },

    authorVerified: {
        paddingTop: Platform.OS === 'ios' ? 1 : 2
    },

    contentWrapper: {
        marginTop: '$contentMarginTop',
        borderRadius: '$contentBorderRadius',
        width: '100%',
        padding: 12,
        backgroundColor: '$cardBackground'
    },

    contentText: {
        color: '$cardText'
    },

    time: {
        position: 'relative',
        top: -3,
        color: '$cardText',
        marginTop: 0,
        fontSize: config.size.text - 3,
        opacity: 0.5
    }
});
