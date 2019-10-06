import constants from '../constants/application';

const initialState = {
    isShow: true
};

export default function application(state = initialState, action) {
    switch (action.type) {
        case constants.APPLICATION_SHOW:
            return {
                ...state,
                isShow: true
            };

        case constants.APPLICATION_HIDE:
            return {
                ...state,
                isShow: false
            };

        default:
            return state;
    }
}
