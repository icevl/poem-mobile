import constants from '../constants/application';

const initialState = {
    isShow: true,
    statusBarColor: '',

    overlayMenu: {}
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

        case constants.APPLICATION_SET_STATUSBAR_COLOR:
            return {
                ...state,
                statusBarColor: action.payload
            };

        case constants.APPLICATION_OVERLAY_MENU_SET:
            return {
                ...state,
                overlayMenu: action.payload
            };

        case constants.APPLICATION_OVERLAY_MENU_CLOSE:
            return {
                ...state,
                overlayMenu: {}
            };

        default:
            return state;
    }
}
