import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './PoemButton.style';
import Touch from '../Touch';

interface Props {
    value: string;
    icon: string;
}
export default class PoemButton extends Component<Props> {
    render() {
        return (
            <Touch>
                <View style={styles.container}>
                    <Icon name={this.props.icon} size={20} style={styles.icon} />
                    <Text style={styles.label}>{this.props.value}</Text>
                </View>
            </Touch>
        );
    }
}
