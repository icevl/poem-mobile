import constants from '../constants/user';

const initialState = {
    id: 1,
    login: 'ice'
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case constants.USER_DETAILS_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                login: action.payload.login
            };

        default:
            return state;
    }
}
