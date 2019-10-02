import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Theme from '../../../themes';

const theme = Theme();

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.color.cardBackground,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 17,
        paddingBottom: 17,
        marginBottom: 3,
        borderTopColor: theme.color.cardBorder,
        borderBottomColor: theme.color.cardBorder,
        borderBottomWidth: 1,
        borderTopWidth: 1
    }
});

export default class Card extends Component {
    render() {
        return <View style={styles.container}>{this.props.children}</View>;
    }
}
