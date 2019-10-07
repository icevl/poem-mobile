import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './Comments.style';

interface Props {
    target: React.ReactNode;
}

export default class Comments extends Component<Props> {
    render() {
        const { target } = this.props;
        return (
            <ScrollView style={styles.scrollView}>
                {target}
                <View>
                    <Text>Comments here</Text>
                </View>
            </ScrollView>
        );
    }
}
