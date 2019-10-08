import { Dimensions, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../../../config';

export default EStyleSheet.create({
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
        fontSize: config.size.text
    },

    authorVerified: {
        paddingTop: Platform.OS === 'ios' ? 2 : 3
    },

    time: {
        position: 'relative',
        top: -3,
        color: '$cardText',
        marginTop: 0,
        fontSize: config.size.text - 3,
        opacity: 0.5
    },

    contextMenuWrapper: {
        flexDirection: 'column',
        width: 30
    },

    contentWrapper: {
        marginTop: 14,
        borderRadius: '$contentBorderRadius',
        width: '100%',
        padding: 12,
        backgroundColor: '$poemBackground'
    },

    title: {
        color: '$primary',
        fontWeight: 'bold',
        paddingBottom: 5,
        fontSize: config.size.text
    },

    dedicateToWrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10
    },

    dedicateTo: {
        flexDirection: 'column',
        color: '$cardText',
        fontSize: config.size.text - 4,
        opacity: 0.5
    },

    dedicateToLinksWrapper: {
        flexShrink: 2,
        paddingLeft: 10,
        flexDirection: 'row'
    },

    dedicateToLink: {
        fontSize: config.size.text - 4,
        color: '$primary'
    },

    buttonsWrapper: {
        marginTop: 40,
        flexDirection: 'row'
    },

    buttonsAction: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: Dimensions.get('window').width - 80
    },

    buttonsActionWrapper: {
        flexDirection: 'row'
    },

    buttonsInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    buttonsInfo: {
        width: 80,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    moreButton: {
        color: '$cardText',
        opacity: 0.5
    }
});
