import React, { Component } from 'react';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

// const TouchComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableOpacity;

interface Props {
    onPress?: any;
    feedback?: boolean;
}

export default class Touch extends Component<Props> {
    render() {
        let TouchComponent = TouchableOpacity;

        if ('feedback' in this.props && !this.props.feedback) {
            //@ts-ignore
            TouchComponent = TouchableWithoutFeedback;
        }

        return (
            <TouchComponent onPress={this.props.onPress ? this.props.onPress.bind(this) : null}>
                {this.props.children}
            </TouchComponent>
        );
    }
}
