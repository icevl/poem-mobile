import React, { Component } from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

const TouchComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

interface Props {
    onPress?: any;
}

export default class Touch extends Component<Props> {
    render() {
        //@ts-ignore
        return (
            <TouchComponent onPress={this.props.onPress ? this.props.onPress.bind(this) : null}>
                {this.props.children}
            </TouchComponent>
        );
    }
}
