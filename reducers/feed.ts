import constants from '../constants/feed';

const initialState = {
    isLoading: false,

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

        default:
            return state;
    }
}
