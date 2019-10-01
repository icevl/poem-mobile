import constants from '../constants/navigation';

export function setNavigation(navigation: any) {
    return dispatch => {
        dispatch({
            type: constants.NAVIGATION_LOADED_SUCCESS,
            payload: navigation
        });
    };
}
