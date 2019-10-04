import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './BottomBarButton.style';

interface Props {
    icon: string;
    isActive?: boolean;
    onPress?: any;
}

export default class BottomBarButton extends Component<Props> {
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress ? this.props.onPress.bind(this) : null}>
                <View style={{ ...styles.container, ...(this.props.isActive && styles.active) }}>
                    <Icon
                        name={this.props.icon}
                        size={30}
                        style={{ ...styles.icon, ...(this.props.isActive && styles.active) }}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
