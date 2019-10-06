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
