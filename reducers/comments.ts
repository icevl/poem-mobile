import constants from '../constants/comments';
// import constantsPoem from '../constants/comments';

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

export default function comments(state = initialState, action) {
    switch (action.type) {
        case constants.COMMENTS_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                items: action.payload.page === 1 ? [] : state.items,
                paginator: {
                    ...state.paginator,
                    page: action.payload.page
                }
            };

        case constants.COMMENTS_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload.results,
                paginator: {
                    ...state.paginator,
                    total: action.payload.total,
                    pages: action.payload.pages
                }
            };

        case constants.COMMENTS_LIST_FAIL:
            return {
                ...state,
                isLoading: false
            };

        case constants.COMMENTS_REMOVE_REQUEST:
            return {
                ...state,
                items: state.items.reduce(
                    (acc, comment) => (comment.id === action.payload.id ? acc : [...acc, comment]),
                    []
                )
            };

        default:
            return state;
    }
}
