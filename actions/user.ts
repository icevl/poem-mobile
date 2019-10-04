import AuthModel from '../models/AuthModel';
import constants from '../constants/user';
import { NavigationScreenProp } from 'react-navigation';
import { AsyncStorage } from 'react-native';

const Model = new AuthModel();

export function facebookSignUp(token: string, navigation: NavigationScreenProp<any, any>) {
    return dispatch => {
        dispatch({
            type: constants.USER_SIGN_IN_REQUEST
        });

        Model.facebookAuth(token)
            .then((r: any) => {
                if (r.token) {
                    AsyncStorage.setItem('token', r.token);

                    navigation.navigate('Feed');
                    dispatch({
                        type: constants.USER_SIGN_IN_SUCCESS,
                        payload: r
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: constants.USER_SIGN_IN_FAIL
                });
            });
    };
}

export function auth() {
    return dispatch => {
        Model.auth()
            .then((r: any) => {
                if (r.id) {
                    dispatch({
                        type: constants.USER_SIGN_IN_SUCCESS,
                        payload: r
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: constants.USER_SIGN_IN_FAIL
                });
            });
    };
}
