export const initialState = {
    isLoading: false,
    comments: [],
    commentsLoadErrorReason: '',
    commentCreateErrorReason: '',
};

export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';
export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';

export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';



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
        default: {
            return {
                ...state,
            };
        }
    }
}