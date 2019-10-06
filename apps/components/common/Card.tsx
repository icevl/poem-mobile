import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        backgroundColor: '$cardBackground',
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 17,
        paddingBottom: 17,
        marginBottom: 3,
        borderTopColor: '$cardBorder',
        borderBottomColor: '$cardBorder',
        borderBottomWidth: 1,
        borderTopWidth: 1
    }
});

export default class Card extends Component {
    render() {
        return <View style={styles.container}>{this.props.children}</View>;
    }
}
