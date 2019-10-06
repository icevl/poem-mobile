import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../../../config';

export default EStyleSheet.create({
    authorRow: {
        flexDirection: 'row',
        height: 50
    },

    avatarWrapper: {
        flexDirection: 'column',
        width: 50,
        borderRadius: 25,
        overflow: 'hidden'
    },

    avatar: {
        width: 50,
        height: 50
    },

    authorWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 14,
        flexGrow: 1
    },

    authorName: {
        color: '$primary',
        fontSize: config.size.text
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
        borderRadius: 10,
        width: '100%',
        padding: 10,
        backgroundColor: '$poemBackground'
    },

    title: {
        color: '$primary',
        fontWeight: 'bold',
        paddingBottom: 5,
        fontSize: config.size.text
    },

    text: {
        color: '$cardText',
        fontSize: config.size.text - 2
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
    }
});
