import React, { Component } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 7,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: 'rgba(17, 18, 21, 0.6)'
    }
});

interface Props {
    children: React.ReactNode;
}

export default class MenuBlock extends Component<Props> {
    render() {
        return <View style={styles.container}>{this.props.children}</View>;
    }
}
