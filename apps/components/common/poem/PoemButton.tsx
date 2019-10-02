import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './PoemButton.style';
// import Touch from '../Touch';

interface Props {
    value: string;
    icon: string;
    isActive?: boolean;
    onPress?: () => void;
}
export default class PoemButton extends Component<Props> {
    render() {
        return (
            <TouchableWithoutFeedback  onPress={this.props.onPress ? this.props.onPress.bind(this) : null}>
                <View style={{ ...styles.container, ...(this.props.isActive && styles.active) }}>
                    <Icon
                        name={this.props.icon}
                        size={20}
                        style={{ ...styles.icon, ...(this.props.isActive && styles.active) }}
                    />
                    <Text style={{ ...styles.label, ...(this.props.isActive && styles.active) }}>
                        {this.props.value}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
