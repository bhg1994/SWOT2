export const initialState = {
    isLoading: false,
    applyStudys: [],
    myApplyStudys: [],
    studyReservation: [],
    applications: [],
    applystudyErrorReason: '',
    myapplystudyErrorReason: '',
    studyReservationErrorReason: '',
    studyAcceptErrorReason: ''
};


export const STUDY_APPLY_REQUEST = 'STUDY_APPLY_REQUEST';
export const STUDY_APPLY_SUCCESS = 'STUDY_APPLY_SUCCESS';
export const STUDY_APPLY_FAILURE = 'STUDY_APPLY_FAILURE';

export const STUDY_MYAPPLY_REQUEST = 'STUDY_MYAPPLY_REQUEST';
export const STUDY_MYAPPLY_SUCCESS = 'STUDY_MYAPPLY_SUCCESS';
export const STUDY_MYAPPLY_FAILURE = 'STUDY_APPLY_FAILURE';

export const STUDY_RESERVATION_REQUEST =
    'STUDY_RESERVATION_REQUEST';
export const STUDY_RESERVATION_SUCCESS =
    'STUDY_RESERVATION_SUCCESS';
export const STUDY_RESERVATION_FAILURE =
    'STUDY_RESERVATION_FAILURE ';

export const STUDY_ACCEPT_REQUEST = 'STUDY_ACCEPT_REQUEST';
export const STUDY_ACCEPT_SUCCESS = 'STUDY_ACCEPT_SUCCESS';
export const STUDY_ACCEPT_FAILURE = 'STUDY_ACCEPT_FAILURE';

export default (state = initialState, action) => {
    switch (action.type) {
        case STUDY_APPLY_REQUEST: {
            return {
                ...state,
                isLoading: true,
                applystudyErrorReason: '',
            }
        }
        case STUDY_APPLY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                applyStudys: action.data
            }
        }
        case STUDY_APPLY_FAILURE: {
            return {
                ...state,
                isLoading: false,
                applystudyErrorReason: action.error
            }
        }

        // 내가 신청한 스터디 조회
        case STUDY_MYAPPLY_REQUEST: {
            return {
                ...state,
                isLoading: true,
                studyReservationErrorReason: '',
            }
        }
        case STUDY_MYAPPLY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                myApplyStudys: action.data
            }
        }
        case STUDY_MYAPPLY_FAILURE: {
            return {
                ...state,
                isLoading: false,
                studyReservationErrorReason: action.error
            }
        }

        // 특정 스터디 예약 조회
        case STUDY_RESERVATION_REQUEST: {
            return {
                ...state,
                isLoading: true,
                myapplystudyErrorReason: '',
            }
        }
        case STUDY_RESERVATION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                studyReservation: action.data.users,
                applications: action.data.applications,
            }
        }
        case STUDY_RESERVATION_FAILURE: {
            return {
                ...state,
                isLoading: false,
                myapplystudyErrorReason: action.error
            }
        }

        // 스터디 수락
        case STUDY_ACCEPT_REQUEST: {
            return {
                ...state,
                isLoading: true,
                studyAcceptErrorReason: '',
            }
        }
        case STUDY_ACCEPT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case STUDY_ACCEPT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                studyAcceptErrorReason: action.error
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
};