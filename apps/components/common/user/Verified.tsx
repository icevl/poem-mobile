import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../../../config';

const styles = EStyleSheet.create({
    icon: {
        paddingLeft: 10,
        color: '$primary',
        justifyContent: 'center'
    }
});

export default class Verified extends Component {
    render() {
        return <Icon name='verified' size={config.size.text} style={styles.icon} />;
    }
}
