import constants from '../constants/application';

export function refreshApplication() {
    return dispatch => {
        dispatch({
            type: constants.APPLICATION_HIDE
        });
        dispatch({
            type: constants.APPLICATION_SHOW
        });
    };
}

export function setStatusbarColor(color: string) {
    return dispatch => {
        dispatch({
            type: constants.APPLICATION_SET_STATUSBAR_COLOR,
            payload: color
        });
    };
}

export function showOverlayMenu(menu: any) {
    return dispatch => {
        dispatch({
            type: constants.APPLICATION_OVERLAY_MENU_SET,
            payload: menu
        });
    };
}

export function closeOverlayMenu() {
    return dispatch => {
        dispatch({
            type: constants.APPLICATION_OVERLAY_MENU_CLOSE
        });
    };
}
