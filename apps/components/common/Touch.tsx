import React, { Component } from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

const TouchComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export default class Touch extends Component {
    render() {
        //@ts-ignore
        return <TouchComponent>{this.props.children}</TouchComponent>;
    }
}
