import constants from '../constants/poem';

const initialState: any = {
    item: {},
    daily: {}
};

export default function poem(state = initialState, action) {
    switch (action.type) {
        case constants.POEM_UPDATE:
            return {
                ...state,
                item: state.item.id === action.payload.id ? action.payload : state.item
            };

        case constants.POEM_LOAD_ITEM:
            return {
                ...state,
                item: action.payload
            };

        case constants.POEM_DAILY_SUCCESS:
            return {
                ...state,
                daily: action.payload
            };

        default:
            return state;
    }
}
