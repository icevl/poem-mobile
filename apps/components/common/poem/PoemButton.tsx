import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './PoemButton.style';

interface Props {
    value: string;
    icon: string;
    isActive?: boolean;
    onPress?: () => void;
    small?: boolean;
}
export default class PoemButton extends Component<Props> {
    render() {
        const fontExtraStyle: any = {};

        let size = 30;
        if (this.props.small) {
            fontExtraStyle.fontSize = 15;
            fontExtraStyle.fontWeight = 'normal';
            fontExtraStyle.marginTop = 0;
            size = 20;
        }

        return (
            <TouchableWithoutFeedback onPress={this.props.onPress ? this.props.onPress.bind(this) : null}>
                <View style={{ ...styles.container, ...(this.props.isActive && styles.active) }}>
                    <Icon
                        name={this.props.icon}
                        size={size}
                        style={{ ...styles.icon, ...(this.props.isActive && styles.active) }}
                    />
                    <Text style={{ ...styles.label, ...fontExtraStyle, ...(this.props.isActive && styles.active) }}>
                        {this.props.value}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
