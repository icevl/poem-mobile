import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View } from 'react-native';

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        marginTop: 7,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: '$cardBackground'
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
