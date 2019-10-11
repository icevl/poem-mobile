import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { View } from 'react-native';
import styles from './BottomBarButton.style';
import Touch from '../../common/Touch';

interface Props {
    icon: string;
    isActive?: boolean;
    onPress?: any;
}

export default class BottomBarButton extends Component<Props> {
    render() {
        return (
            <View style={{ ...styles.container, ...(this.props.isActive && styles.active) }}>
                <Touch onPress={this.props.onPress ? this.props.onPress.bind(this) : null}>
                    <Icon
                        name={this.props.icon}
                        size={30}
                        style={{ ...styles.icon, ...(this.props.isActive && styles.active) }}
                    />
                </Touch>
            </View>
        );
    }
}
