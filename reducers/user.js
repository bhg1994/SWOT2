export const initialState = {
    isLoggedIn: false, // 로그인 여부
    isEmailedUp: false, // 이메일 중복 성공
    isEmailingUp: false, // 이메일 중복 시도중
    isLoggingOut: false, // 로그아웃 시도중
    isLoggingIn: false, // 로그인 시도중
    logInErrorReason: '', // 로그인 실패 사유
    isSignedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 시도중
    signUpErrorReason: '', // 회원가입 실패 사유
    me: null, // 내 정보
    userInfo: null, // 남의 정보
    tokens: null,
    reservationErrorReason: '',
    userpwErrorReason: '',
    emailErrorReason: ''

};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const EMAIL_DUPLICATE_REQUEST = 'EMAIL_DUPLICATE_REQUEST';
export const EMAIL_DUPLICATE_SUCCESS = 'EMAIL_DUPLICATE_SUCCESS';
export const EMAIL_DUPLICATE_FAILURE = 'EMAIL_DUPLICATE_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const USER_MODIFY_REQUEST = 'USER_MODIFY_REQUEST';
export const USER_MODIFY_SUCCESS = 'USER_MODIFY_SUCCESS';
export const USER_MODIFY_FAILURE = 'USER_MODIFY_FAILURE';

export const USERPW_MODIFY_REQUEST = 'USERPW_MODIFY_REQUEST';
export const USERPW_MODIFY_SUCCESS = 'USERPW_MODIFY_SUCCESS';
export const USERPW_MODIFY_FAILURE = 'USERPW_MODIFY_FAILURE';

export const USER_WITHDRAWAL_REQUEST = 'USER_WITHDRAWAL_REQUEST';
export const USER_WITHDRAWAL_SUCCESS = 'USER_WITHDRAWAL_SUCCESS';
export const USER_WITHDRAWAL_FAILURE = 'USER_WITHDRAWAL_FAILURE';




export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                isLoggingIn: true,
                logInErrorReason: '',
            };
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                isLoading: false,
            };
        }
        case LOG_IN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                logInErrorReason: action.error,
                me: null,
            };
        }

        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            };
        }
        case SIGN_UP_REQUEST: {
            return {
                ...state,
                isSigningUp: true,
                isSignedUp: false,
                signUpErrorReason: '',
            };
        }
        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                isSigningUp: false,
                isSignedUp: true,
            };
        }
        case SIGN_UP_FAILURE: {
            return {
                ...state,
                isSigningUp: false,
                signUpErrorReason: action.error,
            };
        }
        // email duplicate
        case EMAIL_DUPLICATE_REQUEST: {
            return {
                ...state,
                isEmailingUp: true,
                isEmailedUp: false,
                emailErrorReason: '',
            };
        }
        case EMAIL_DUPLICATE_SUCCESS: {
            return {
                ...state,
                isEmailingUp: false,
                isEmailedUp: true,
                emailErrorReason: '',
            };
        }
        case EMAIL_DUPLICATE_FAILURE: {
            return {
                ...state,
                isEmailingUp: false,
                emailErrorReason: '',
            };
        }
        case LOAD_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                reservationErrorReason: '',
            };
        }
        case LOAD_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case LOAD_USER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                reservationErrorReason: action.error,
            };
        }

        case USER_MODIFY_REQUEST: {
            return {
                ...state,
                isLoading: true,
                reservationErrorReason: '',
            };
        }
        case USER_MODIFY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case USER_MODIFY_FAILURE: {
            return {
                ...state,
                isLoading: false,
                reservationErrorReason: action.error,
            };
        }
        case USERPW_MODIFY_REQUEST: {
            return {
                ...state,
                isLoading: true,
                userpwErrorReason: ''
            }
        }
        case USERPW_MODIFY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case USERPW_MODIFY_FAILURE: {
            return {
                ...state,
                isLoading: false,
                userpwErrorReason: '',
            }
        }
        case USER_WITHDRAWAL_REQUEST: {
            return {
                ...state,
                isLoading: true,
                reservationErrorReason: '',
            };
        }
        case USER_WITHDRAWAL_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case USER_WITHDRAWAL_FAILURE: {
            return {
                ...state,
                isLoading: false,
                reservationErrorReason: action.error,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};