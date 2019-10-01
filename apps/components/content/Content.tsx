import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Theme from '../../../themes/index';

const theme = Theme();

const styles = StyleSheet.create({
    content: {
        backgroundColor: theme.color.background,
        flex: 1
    }
});

export default class Content extends Component {
    render() {
        return <View style={styles.content}>{this.props.children}</View>;
    }
}
