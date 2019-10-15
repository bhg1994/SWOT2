export const initialState = {
    reservationErrorReason: '',
    roomListErrorReason: '',
    isLoading: false,
    totalRoomList: [],
    
};

export const RESERVATION_REQUEST = 'RESERVATION_REQUEST';
export const RESERVATION_SUCCESS = 'RESERVATION_SUCCESS';
export const RESERVATION_FAILURE = 'RESERVATION_FAILURE';

export const ROOMLIST_REQUEST = 'ROOMLIST_REQUEST';
export const ROOMLIST_SUCCESS = 'ROOMLIST_SUCCESS';
export const ROOMLIST_FAILURE = 'ROOMLIST_FAILURE';

export default (state = initialState, action) => {
    switch (action.type) {
        case RESERVATION_REQUEST: {
            return {
                ...state,
                isLoading: true,
                reservationErrorReason: '',
            };
        }
        case RESERVATION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                
            };
        }
        case RESERVATION_FAILURE: {
            return {
                ...state,
                isLoading: false,
                reservationErrorReason: action.error,
            };
        }
        case ROOMLIST_REQUEST: {
            return {
                ...state,
                isLoading: true,
                roomListErrorReason: '',
            };
        }
        case ROOMLIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                
            };
        }
        case ROOMLIST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                roomListErrorReason: action.error,
            };
        }
        default: {
            return{
                ...state,
            };
        }
    }
}