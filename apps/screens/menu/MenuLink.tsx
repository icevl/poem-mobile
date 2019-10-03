import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import styles from './MenuLink.style';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
    title: string;
    screen?: string;
    onPress?: () => void;
    icon: string;
    navigator?: NavigationScreenProp<any, any>;
}

const TouchComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

class MenuLink extends Component<Props> {
    onNavigate(screen: string) {
        this.props.navigator.navigate(screen);
    }

    render() {
        const textStyle: any = { ...styles.text, fontFamily: 'Electrolize' };
        return (
            <TouchComponent
                onPress={
                    this.props.onPress ? this.props.onPress.bind(this) : this.onNavigate.bind(this, this.props.screen)
                }>
                <View style={styles.content}>
                    <View>
                        <Icon name={this.props.icon} size={24} style={styles.icon} />
                    </View>
                    <View>
                        <Text style={textStyle}>{this.props.title}</Text>
                    </View>
                </View>
            </TouchComponent>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        navigator: state.navigation.navigator
    };
};

export default connect(mapStateToProps)(MenuLink);
