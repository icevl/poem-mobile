import { AsyncStorage } from 'react-native';
import BaseModel from '../models/Base';
import constants from '../constants/feed';
import config from '../config';
import { Pagination } from 'interfaces/pagination';

const Model = new BaseModel(config.paths.feed);

export function getList(page: number, filters = {}) {
    return dispatch => {
        dispatch({
            type: constants.FEED_LIST_REQUEST,
            payload: {
                page,
                filters
            }
        });

        Model.getList(page, filters)
            .then((r: Pagination) => {
                dispatch({
                    type: constants.FEED_LIST_SUCCESS,
                    payload: r
                });

                if (r.page === 1) {
                    AsyncStorage.setItem('feed', JSON.stringify(r.results));
                }
            })
            .catch(() => {
                dispatch({
                    type: constants.FEED_LIST_FAIL
                });
            });
    };
}

export function refreshFeed(options: any = {}) {
    return dispatch => {
        dispatch({
            type: constants.FEED_LIST_REFRESH_REQUEST,
            payload: options
        });

        Model.getList(1, options.filters)
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

export function getFeedFromLocal() {
    return async dispatch => {
        const localList = await AsyncStorage.getItem('feed');
        let list = [];

        if (localList) {
            try {
                list = JSON.parse(localList);
            } catch (err) {
                console.log(err);
            }
        }

        dispatch({
            type: constants.FEED_LIST_LOCAL,
            payload: list
        });
    };
}
