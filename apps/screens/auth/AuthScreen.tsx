import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import * as Facebook from 'expo-facebook';
import { NavigationScreenProp } from 'react-navigation';
import { facebookSignUp } from '../../../actions/user';

interface Props {
    facebookSignUp: any;
    navigation: NavigationScreenProp<any, any>;
}

class AuthScreen extends Component<Props> {
    componentDidMount() {
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
    { facebookSignUp }
)(AuthScreen);
