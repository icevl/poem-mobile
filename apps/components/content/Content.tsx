import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    content: {
        backgroundColor: '$background',
        flex: 1
    }
});

export default class Content extends Component {
    render() {
        return <View style={styles.content}>{this.props.children}</View>;
    }
}
