import constants from '../constants/poem';
import { Poem } from 'interfaces/poem';
import BaseModel from '../models/Base';
import config from '../config';

const model = new BaseModel(config.paths.poems);

export function update(poem: Poem) {
    return dispatch => {
        dispatch({
            type: constants.POEM_UPDATE,
            payload: poem
        });
    };
}

export function removePoem(poem: Poem) {
    return dispatch => {
        dispatch({
            type: constants.POEM_REMOVE_REQUEST,
            payload: poem
        });

        model
            .removeItem(poem.id)
            .then(r => {
                dispatch({
                    type: constants.POEM_REMOVE_SUCCESS,
                    payload: r
                });
            })
            .catch(err => {
                dispatch({
                    type: constants.POEM_REMOVE_FAIL,
                    payload: err
                });
            });
    };
}

export function loadPoemDetails(poem: Poem) {
    return dispatch => {
        dispatch({
            type: constants.POEM_LOAD_ITEM,
            payload: poem
        });
    };
}
