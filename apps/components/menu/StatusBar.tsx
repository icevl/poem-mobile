import React from 'react';
import { View } from 'react-native';
import styles from './StatusBar.style';

export default class StatusBar extends React.Component {
    render() {
        return <View style={styles.statusBar} />;
    }
}
