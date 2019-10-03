import BaseModel from '../models/Base';
import constants from '../constants/feed';
import config from '../config';

const Model = new BaseModel(config.paths.feed);

export function getList(page: number) {
    return dispatch => {
        dispatch({
            type: constants.FEED_LIST_REQUEST,
            payload: {
                page
            }
        });

        Model.getList(page)
            .then(r => {
                dispatch({
                    type: constants.FEED_LIST_SUCCESS,
                    payload: r
                });
            })
            .catch(() => {
                dispatch({
                    type: constants.FEED_LIST_FAIL
                });
            });
    };
}

export function refreshFeed() {
    return dispatch => {
        dispatch({
            type: constants.FEED_LIST_REFRESH_REQUEST
        });

        Model.getList(1)
            .then((r: any) => {
                dispatch({
                    type: constants.FEED_LIST_REFRESH_SUCCESS,
                    payload: r.results
                });
            })
            .catch(() => {
                dispatch({
                    type: constants.FEED_LIST_REFRESH_FAIL
                });
            });
    };
}
