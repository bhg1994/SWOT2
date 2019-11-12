export const initialState = {
    isLoading: false,
    applyStudys: [],
    myApplyStudys: [],
    myApplyStudysApplications: [],
    studyReservation: [],
    applystudyErrorReason: '',
    myapplystudyErrorReason: '',
    studyReservationErrorReason: '',
    studyAcceptErrorReason: '',
    studyRejectErrorReason: '',
    applystudycancelErrorReason: ''
};


export const STUDY_APPLY_REQUEST = 'STUDY_APPLY_REQUEST';
export const STUDY_APPLY_SUCCESS = 'STUDY_APPLY_SUCCESS';
export const STUDY_APPLY_FAILURE = 'STUDY_APPLY_FAILURE';

export const STUDY_MYAPPLY_REQUEST = 'STUDY_MYAPPLY_REQUEST';
export const STUDY_MYAPPLY_SUCCESS = 'STUDY_MYAPPLY_SUCCESS';
export const STUDY_MYAPPLY_FAILURE = 'STUDY_APPLY_FAILURE';

export const STUDY_MYAPPLYCANCEL_REQUEST =
    'STUDY_MYAPPLYCANCEL_REQUEST';
export const STUDY_MYAPPLYCANCEL_SUCCESS =
    'STUDY_MYAPPLYCANCEL_SUCCESS';
export const STUDY_MYAPPLYCANCEL_FAILURE =
    'STUDY_MYAPPLYCANCEL_FAILURE';

export const STUDY_RESERVATION_REQUEST =
    'STUDY_RESERVATION_REQUEST';
export const STUDY_RESERVATION_SUCCESS =
    'STUDY_RESERVATION_SUCCESS';
export const STUDY_RESERVATION_FAILURE =
    'STUDY_RESERVATION_FAILURE ';

export const STUDY_ACCEPT_REQUEST = 'STUDY_ACCEPT_REQUEST';
export const STUDY_ACCEPT_SUCCESS = 'STUDY_ACCEPT_SUCCESS';
export const STUDY_ACCEPT_FAILURE = 'STUDY_ACCEPT_FAILURE';

export const STUDY_REJECT_REQUEST = 'STUDY_REJECT_REQUEST';
export const STUDY_REJECT_SUCCESS = 'STUDY_REJECT_SUCCESS';
export const STUDY_REJECT_FAILURE = 'STUDY_REJECT_FAILURE';




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
                myApplyStudys: action.data.boards,
                myApplyStudysApplications: action.data.applications
            }
        }
        case STUDY_MYAPPLY_FAILURE: {
            return {
                ...state,
                isLoading: false,
                studyReservationErrorReason: action.error
            }
        }

        // 내가 신청한 스터디 신청 취소
        case STUDY_MYAPPLYCANCEL_REQUEST: {
            return {
                ...state,
                isLoading: true,
                applystudycancelErrorReason: '',
            }
        }
        case STUDY_MYAPPLYCANCEL_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case STUDY_MYAPPLYCANCEL_FAILURE: {
            return {
                ...state,
                isLoading: false,
                applystudycancelErrorReason: action.error
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

        // 스터디 거절
        case STUDY_REJECT_REQUEST: {
            return {
                ...state,
                isLoading: true,
                studyRejectErrorReason: '',
            }
        }
        case STUDY_REJECT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case STUDY_REJECT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                studyRejectErrorReason: action.error
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
};