import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import * as Facebook from 'expo-facebook';
import { NavigationScreenProp } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { facebookSignUp, auth } from '../../../actions/user';

interface Props {
    facebookSignUp: any;
    auth: any;
    navigation: NavigationScreenProp<any, any>;
}

class AuthScreen extends Component<Props> {
    async componentDidMount() {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            this.props.auth();
            this.props.navigation.navigate('Feed');
        }

        // kabanov.mike@gmail.com
        // ice246246
    }

    async logIn() {
        try {
            const { type, token } = await Facebook.logInWithReadPermissionsAsync('2410697895916398');
            if (type === 'success') {
                this.props.facebookSignUp(token, this.props.navigation);
            }
        } catch ({ message }) {
            console.log(`Facebook Login Error: ${message}`);
        }
    }

    render() {
        return (
            <View>
                <Button title='Facebook' onPress={this.logIn.bind(this)} />
            </View>
        );
    }
}

// const mapStateToProps = (state: any) => {
//     return {};
// };

export default connect(
    null,
    { facebookSignUp, auth }
)(AuthScreen);
