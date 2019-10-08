import BaseModel from '../models/Base';
import constants from '../constants/comments';
import config from '../config';
import { Pagination } from 'interfaces/pagination';

const Model = new BaseModel(config.paths.comments);

export function getList(page: number, type: string, id: number) {
    return dispatch => {
        dispatch({
            type: constants.COMMENTS_LIST_REQUEST,
            payload: {
                page
            }
        });

        Model.getList(page, { type, id })
            .then((r: Pagination) => {
                dispatch({
                    type: constants.COMMENTS_LIST_SUCCESS,
                    payload: r
                });
            })
            .catch(() => {
                dispatch({
                    type: constants.COMMENTS_LIST_FAIL
                });
            });
    };
}
