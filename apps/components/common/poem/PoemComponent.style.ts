import { StyleSheet } from 'react-native';
import Theme from '../../../../themes';
import config from '../../../../config';

const theme = Theme();

export default StyleSheet.create({
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
        color: theme.color.primary,
        fontSize: config.size.text
    },

    time: {
        position: 'relative',
        top: -3,
        color: theme.color.cardText,
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
        backgroundColor: theme.color.poemBackground
    },

    title: {
        color: theme.color.primary,
        fontWeight: 'bold',
        paddingBottom: 5,
        fontSize: config.size.text
    },

    text: {
        color: theme.color.cardText,
        fontSize: config.size.text - 2
    },

    dedicateToWrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10
    },

    dedicateTo: {
        flexDirection: 'column',
        color: theme.color.cardText,
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
        color: theme.color.primary
    },

    buttonsWrapper: {
        marginTop: 14,
        flexDirection: 'row'
    }
});
