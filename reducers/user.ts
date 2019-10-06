import constants from '../constants/user';

const initialState = {
    id: null,
    login: '',
    accountUsers: []
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case constants.USER_DETAILS_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                login: action.payload.login
            };

        case constants.USER_SIGN_IN_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                login: action.payload.login,
                accountUsers: action.payload.account_users
            };

        default:
            return state;
    }
}
