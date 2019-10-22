import constants from '../constants/feed';
import constantsPoem from '../constants/poem';
import { updateItemList } from '../helpers/common';

const initialState = {
    isLoading: false,
    isRefreshLoading: false,

    filters: {},
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
                filters: action.payload.filters,
                paginator: {
                    ...state.paginator,
                    page: action.payload.page
                }
            };

        case constants.FEED_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items:
                    action.payload.page === 1
                        ? action.payload.results
                        : updateItemList(state.items, action.payload.results, 'DESC'),
                paginator: {
                    ...state.paginator,
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

        case constantsPoem.POEM_REMOVE_REQUEST:
            return {
                ...state,
                items: state.items.reduce((acc, poem) => (poem.id === action.payload.id ? acc : [...acc, poem]), [])
            };

        /** REFRESH */

        case constants.FEED_LIST_REFRESH_REQUEST:
            return {
                ...state,
                //isRefreshLoading: action.payload.showLoader || !('showLoader' in action.payload)
                isRefreshLoading: true
            };

        case constants.FEED_LIST_REFRESH_SUCCESS:
            return {
                ...state,
                isRefreshLoading: false,
                items: updateItemList(state.items, action.payload, 'DESC')
            };

        case constants.FEED_LIST_REFRESH_FAIL:
            return {
                ...state,
                isRefreshLoading: false
            };

        case constants.FEED_FLUSH:
            return {
                ...state,
                items: []
            };

        /**
         * Load first page from local
         */

        case constants.FEED_LIST_LOCAL:
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }
}
