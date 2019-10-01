import constants from '../constants/navigation';

const initialState = {
    navigator: null
};

export default function navigation(state = initialState, action) {
    switch (action.type) {
        case constants.NAVIGATION_LOADED_SUCCESS:
            return {
                ...state,
                navigator: action.payload
            };

        default:
            return state;
    }
}
