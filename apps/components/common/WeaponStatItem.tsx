import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './WeaponStatItem.style';

interface Props {
    title: string;
}

interface State {}

export default class WeaponStatItem extends Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        const titleStyle = { ...styles.title, fontFamily: 'Electrolize' };
        const progress = {
            ...styles.progress,
            width: Math.floor(Math.random() * styles.progress.width) + 1
        };

        return (
            <View style={styles.container}>
                <View style={styles.labelWrapper}>
                    <Text style={titleStyle}>{this.props.title}</Text>
                </View>

                <View style={styles.progressWrapper}>
                    <View style={progress} />
                </View>
            </View>
        );
    }
}
