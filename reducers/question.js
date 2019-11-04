export const initialState = {
    isLoading: false,
    questions: [],
    loadQuestionErrorReason: '',
    createQuestionErrorReason: '',
    deleteQuestionErrorReason: '',
    modifyQuestionErrorReason: '',
}


export const LOAD_QUESTION_REQUEST = 'LOAD_QUESTION_REQUEST';
export const LOAD_QUESTION_SUCCESS = 'LOAD_QUESTION_SUCCESS';
export const LOAD_QUESTION_FAILURE = 'LOAD_QUESTION_FAILURE';


export const CREATE_QUESTION_REQUEST = 'CREATE_QUESTION_REQUEST';
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_FAILURE = 'CREATE_QUESTION_FAILURE';

export const DELETE_QUESTION_REQUEST = 'DELETE_QUESTION_REQUEST';
export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS';
export const DELETE_QUESTION_FAILURE = 'DELETE_QUESTION_FAILURE';

export const MODIFY_QUESTION_REQUEST = 'MODIFY_QUESTION_REQUEST';
export const MODIFY_QUESTION_SUCCESS = 'MODIFY_QUESTION_SUCCESS';
export const MODIFY_QUESTION_FAILURE = 'MODIFY_QUESTION_FAILURE';


export default (state = initialState, action) => {
    switch (action.type) {

        // Q&A 게시글 로드
        case LOAD_QUESTION_REQUEST: {
            return {
                ...state,
                isLoading: true,
                loadQuestionErrorReason: '',
            };
        }
        case LOAD_QUESTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                questions: action.data
            };
        }
        case LOAD_QUESTION_FAILURE: {
            return {
                ...state,
                isLoading: false,
                loadNotifycationsErrorReason: action.error,
            };
        }

        // Q&A 게시글 작성
        case CREATE_QUESTION_REQUEST: {
            return {
                ...state,
                isLoading: true,
                createQuestionErrorReason: '',
            };
        }
        case CREATE_QUESTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                questions: [...state.questions, action.data],
            };
        }
        case CREATE_QUESTION_FAILURE: {
            return {
                ...state,
                isLoading: true,
                createQuestionErrorReason: action.error,
            };
        }

        // Q&A 게시글 삭제
        case DELETE_QUESTION_REQUEST: {
            return {
                ...state,
                isLoading: true,
                deleteQuestionErrorReason: '',
            };
        }
        case DELETE_QUESTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case DELETE_QUESTION_FAILURE: {
            return {
                ...state,
                isLoading: true,
                deleteQuestionErrorReason: action.error,
            };
        }

        // Q&A 게시글 수정
        case MODIFY_QUESTION_REQUEST: {
            return {
                ...state,
                isLoading: true,
                modifyQuestionErrorReason: '',
            };
        }
        case MODIFY_QUESTION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case MODIFY_QUESTION_FAILURE: {
            return {
                ...state,
                isLoading: true,
                modifyQuestionErrorReason: action.error,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
}