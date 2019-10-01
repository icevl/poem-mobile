import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { View } from 'react-native';
import styles from './Loader.style';

interface Props {
    isLoading: boolean;
}

export default class Loader extends Component<Props> {
    render() {
        if (!this.props.isLoading) {
            return null;
        }

        return (
            <View style={styles.content}>
                <Animatable.Image
                    style={styles.image}
                    source={require('../../../assets/images/loader.png')}
                    animation='pulse'
                    easing='ease-out'
                    iterationCount='infinite'
                />
            </View>
        );
    }
}
