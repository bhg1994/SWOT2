export const initialState = {
    imagePaths: [], // 미리보기 이미지 경로
    isAddingPost: false, // 포스트 업로드 중
    postAdded: false, // 포스트 업로드 성공
    isLoading: false,
    posts: [],
    loadErrorReason: '',
    createErrorReason: '',
    deleteErrorReason: '',
    modifyErrorReason: '',
    errorReason: '',
    selectedStudy: null,
};


export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const MODIFY_POST_REQUEST = 'MODIFY_POST_REQUEST';
export const MODIFY_POST_SUCCESS = 'MODIFY_POST_SUCCESS';
export const MODIFY_POST_FAILURE = 'MODIFY_POST_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const STUDY_SELECT_REQUEST = 'STUDY_SELECT_REQUEST';


export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POST_REQUEST: {
            return {
                ...state,
                isLoading: true,
                loadErrorReason: '',
            };
        }
        case LOAD_POST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                posts: action.data
            };
        }
        case LOAD_POST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                loadErrorReason: action.error,
            };
        }

        //  글 작성
        case CREATE_POST_REQUEST: {
            return {
                ...state,
                isLoading: true,
                createErrorReason: '',
            };
        }
        case CREATE_POST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                posts: [...state.posts, action.data],
                createErrorReason: ''
            };
        }
        case CREATE_POST_FAILURE: {
            return {
                ...state,
                isLoading: true,
                createErrorReason: action.error,
            };
        }

        // 공지사항 글 삭제
        case DELETE_POST_REQUEST: {
            return {
                ...state,
                isLoading: true,
                deleteErrorReason: '',
            };
        }
        case DELETE_POST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                // notifycations: state.notifycations.filter(notify => notify.id !== action.data.id)
            };
        }
        case DELETE_POST_FAILURE: {
            return {
                ...state,
                isLoading: true,
                deleteErrorReason: action.error,
            };
        }

        // 공지사항 글 수정
        case MODIFY_POST_REQUEST: {
            return {
                ...state,
                isLoading: true,
                modifyErrorReason: '',
            }
        }

        case MODIFY_POST_SUCCESS: {
            return {
                ...state,
                isLoading: false
            }
        }

        case MODIFY_POST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                modifyErrorReason: action.error,
            }
        }
        case STUDY_SELECT_REQUEST: {
            return {
                ...state,
                selectedStudy: action.data,
            }
        }

        default: {
            return {
                ...state,
            };
        }
    }
};