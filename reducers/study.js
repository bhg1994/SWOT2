export const initialState = {
    isLoading: false,
    applyStudys: [],
    applystudyErrorReason: '',
};


export const STUDY_APPLY_REQUEST = 'STUDY_APPLY_REQUEST';
export const STUDY_APPLY_SUCCESS = 'STUDY_APPLY_SUCCESS';
export const STUDY_APPLY_FAILURE = 'STUDY_APPLY_FAILURE';


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
        default: {
            return {
                ...state,
            };
        }
    }
};