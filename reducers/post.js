export const initialState = {

    imagePaths: [], // 미리보기 이미지 경로
    addPostErrorReason: '', // 포스트 업로드 실패 사유
    isAddingPost: false, // 포스트 업로드 중
    postAdded: false, // 포스트 업로드 성공
    isLoading: false,
    isAddingComment: false,
    addCommentErrorReason: '',
    commentAdded: false,
    notifycations: [],
    studyboards: [],
    loadNotifycationsErrorReason: '',
    createNotificationErrorReason: '',
    deleteNotificationErrorReason: '',
    errorReason: '',
};


export const LOAD_NOTIFYCATIONS_REQUEST = 'LOAD_NOTIFYCATIONS_REQUEST';
export const LOAD_NOTIFYCATIONS_SUCCESS = 'LOAD_NOTIFYCATIONS_SUCCESS';
export const LOAD_NOTIFYCATIONS_FAILURE = 'LOAD_NOTIFYCATIONS_FAILURE';

export const CREATE_NOTIFYCATIONS_REQUEST = 'CREATE_NOTIFYCATIONS_REQUEST';
export const CREATE_NOTIFYCATIONS_SUCCESS = 'CREATE_NOTIFYCATIONS_SUCCESS';
export const CREATE_NOTIFYCATIONS_FAILURE = 'CREATE_NOTIFYCATIONS_FAILURE';

export const DELETE_NOTIFYCATIONS_REQUEST = 'DELETE_NOTIFYCATIONS_REQUEST';
export const DELETE_NOTIFYCATIONS_SUCCESS = 'DELETE_NOTIFYCATIONS_SUCCESS';
export const DELETE_NOTIFYCATIONS_FAILURE = 'DELETE_NOTIFYCATIONS_FAILURE';

export const LOAD_STUDYBOARDS_REQUEST = 'LOAD_STUDYBOARDS_REQUEST';
export const LOAD_STUDYBOARDS_SUCCESS = 'LOAD_STUDYBOARDS_SUCCESS';
export const LOAD_STUDYBOARDS_FAILURE = 'LOAD_STUDYBOARDS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NOTIFYCATIONS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                loadNotifycationsErrorReason: '',
            };
        }
        case LOAD_NOTIFYCATIONS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                notifycations: action.data
            };
        }
        case LOAD_NOTIFYCATIONS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                loadNotifycationsErrorReason: action.error,
            };
        }

        // 공지사항 글 작성
        case CREATE_NOTIFYCATIONS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                createNotificationErrorReason: '',
            };
        }
        case CREATE_NOTIFYCATIONS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                notifycations: [...state.notifycations, action.data],
                createNotificationErrorReason: ''
            };
        }
        case CREATE_NOTIFYCATIONS_FAILURE: {
            return {
                ...state,
                isLoading: true,
                createNotificationErrorReason: action.error,
            };
        }

        // 공지사항 글 삭제
        case DELETE_NOTIFYCATIONS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                deleteNotificationErrorReason: '',
            };
        }
        case DELETE_NOTIFYCATIONS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                // notifycations: state.notifycations.filter(notify => notify.id !== action.data.id)
            };
        }
        case DELETE_NOTIFYCATIONS_FAILURE: {
            return {
                ...state,
                isLoading: true,
                deleteNotificationErrorReason: action.error,
            };
        }

        case LOAD_STUDYBOARDS_REQUEST: {
            return {
                ...state,
            };
        }
        case LOAD_STUDYBOARDS_SUCCESS: {
            return {
                ...state,
                studyboards: action.data,
            };
        }
        case LOAD_STUDYBOARDS_FAILURE: {
            return {
                ...state,
                errorReason: action.error,
            };
        }



        case ADD_POST_REQUEST: {
            return {
                ...state,
                isAddingPost: true,
                addPostErrorReason: '',
                postAdded: false,
            };
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false,
                postAdded: true,
            };
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                addPostErrorReason: action.error,
            };
        }
        case ADD_COMMENT_REQUEST: {
            return {
                ...state,
                isAddingComment: true,
                addCommentErrorReason: '',
                commentAdded: false,
            };
        }
        case ADD_COMMENT_SUCCESS: {
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = {
                ...post,
                Comments
            };
            return {
                ...state,
                isAddingComment: false,
                mainPosts,
                commentAdded: true,
            };
        }
        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason: action.error,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};