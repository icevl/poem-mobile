import constants from '../constants/poem';
import { Poem } from 'interfaces/poem';

export function update(poem: Poem) {
    return dispatch => {
        dispatch({
            type: constants.POEM_UPDATE,
            payload: poem
        });
    };
}
