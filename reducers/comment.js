export const initialState = {
    isLoading: false,
    comments: [],
    commentsLoadErrorReason: '',
    commentCreateErrorReason: '',
    commentDeleteErrorReason: '',
    selectedComment: null,
};

export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';
export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';

export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';

export const DELETE_COMMENT_REQUEST =
    'DELETE_COMMENT_REQUEST';
export const DELETE_COMMENT_SUCCESS =
    'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE =
    'DELETE_COMMENT_FAILURE';

export const COMMENT_SELECT_REQUEST = 'COMMENT_SELECT_REQUEST';

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENT_REQUEST: {
            return {
                ...state,
                isLoading: true,
                commentsLoadErrorReason: '',
            };
        }
        case LOAD_COMMENT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                comments: action.data
            };
        }
        case LOAD_COMMENT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                commentsLoadErrorReason: action.error
            };
        }
        case CREATE_COMMENT_REQUEST: {
            return {
                ...state,
                isLoading: true,
                commentCreateErrorReason: '',
            };
        }
        case CREATE_COMMENT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case CREATE_COMMENT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                commentCreateErrorReason: action.error
            };
        }
        case DELETE_COMMENT_REQUEST: {
            return {
                ...state,
                isLoading: true,
                commentDeleteErrorReason: '',
            };
        }
        case DELETE_COMMENT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case DELETE_COMMENT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                commentDeleteErrorReason: action.error
            };
        }
        case COMMENT_SELECT_REQUEST: {
            return {
                ...state,
                selectedComment: action.data,
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
}