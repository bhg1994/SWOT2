export const initialState = {
    isLoading: false,
    reservationStatus: [],
    privatereservationsErrorReason: '',
};

export const RESERVATION_STATUS_REQUEST = 'RESERVATION_STATUS_REQUEST';
export const RESERVATION_STATUS_SUCCESS = 'RESERVATION_STATUS_SUCCESS';
export const RESERVATION_STATUS_FAILURE = 'RESERVATION_STATUS_FAILURE';

export default (state = initialState, action) => {
    switch (action.type) {
        case RESERVATION_STATUS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                privatereservationsErrorReason: '',
            };
        }
        case RESERVATION_STATUS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                reservationStatus: action.data
            }
        }
        case RESERVATION_STATUS_FAILURE: {
            return {
                ...state,
                isLoading: true,
                privatereservationsErrorReason: ''
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
}