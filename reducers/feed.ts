import constants from '../constants/feed';
import constantsPoem from '../constants/poem';
import { updatePoemList } from '../helpers/poem';

const initialState = {
    isLoading: false,
    isRefreshLoading: false,

    items: [],
    paginator: {
        total: 0,
        pages: 0,
        page: 0
    }
};

export default function feed(state = initialState, action) {
    switch (action.type) {
        case constants.FEED_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                paginator: {
                    ...state.paginator,
                    page: action.payload.page
                }
            };

        case constants.FEED_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload.results,
                paginator: {
                    total: action.payload.total,
                    pages: action.payload.pages
                }
            };

        case constants.FEED_LIST_FAIL:
            return {
                ...state,
                isLoading: false
            };

        case constantsPoem.POEM_UPDATE:
            return {
                ...state,
                items: state.items.reduce(
                    (acc, poem) => (poem.id === action.payload.id ? [...acc, action.payload] : [...acc, poem]),
                    []
                )
            };

        /** REFRESH */

        case constants.FEED_LIST_REFRESH_REQUEST:
            return {
                ...state,
                isRefreshLoading: true
            };

        case constants.FEED_LIST_REFRESH_SUCCESS:
            return {
                ...state,
                isRefreshLoading: false,
                items: updatePoemList(state.items, action.payload)
            };

        case constants.FEED_LIST_REFRESH_FAIL:
            return {
                ...state,
                isRefreshLoading: false
            };

        default:
            return state;
    }
}
