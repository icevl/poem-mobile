import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface Props {
    color?: string;
}

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

export default class Card extends Component<Props> {
    render() {
        const { color } = this.props;

        const cardStyles = { ...styles.container };
        if (this.props.color) {
            cardStyles.backgroundColor = color;
        }

        return <View style={cardStyles}>{this.props.children}</View>;
    }
}
