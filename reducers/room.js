export const initialState = {
    reservationErrorReason: "",
    roomListErrorReason: "",
    createRoomReason: "",
    deleteRoomReason: "",
    isLoading: false,
    totalRoomList: [],
    selectedRoom: null,
    startTime: "",
    endTime: "",
    date: "",
    errorReason: "",
    roomReservations: [],
    reservationsList: [],
};

export const RESERVATION_REQUEST = 'RESERVATION_REQUEST';
export const RESERVATION_SUCCESS = 'RESERVATION_SUCCESS';
export const RESERVATION_FAILURE = 'RESERVATION_FAILURE';

export const ROOMLIST_REQUEST = 'ROOMLIST_REQUEST';
export const ROOMLIST_SUCCESS = 'ROOMLIST_SUCCESS';
export const ROOMLIST_FAILURE = 'ROOMLIST_FAILURE';

export const ROOM_RESERVATIONS_REQUEST = 'ROOM_RESERVATIONS_REQUEST'
export const ROOM_RESERVATIONS_SUCCESS = 'ROOM_RESERVATIONS_SUCCESS'
export const ROOM_RESERVATIONS_FAILURE = 'ROOM_RESERVATIONS_FAILURE'


export const ROOM_SELECT_REQUEST = 'ROOM_SELECT_REQUEST';
export const START_TIME_SELECT = 'START_TIME_SELECT';
export const END_TIME_SELECT = 'END_TIME_SELECT';
export const DATE_SELECT = 'DATE_SELECT';

export default (state = initialState, action) => {
    switch (action.type) {
        case RESERVATION_REQUEST: {
            return {
                ...state,
                isLoading: true,
                reservationErrorReason: ""
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
                roomListErrorReason: ""
            };
        }
        case ROOMLIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                totalRoomList: action.data,
            };
        }
        case ROOMLIST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                roomListErrorReason: action.error,
            };
        }
        case ROOM_RESERVATIONS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                errorReason: ""
            };
        }
        case ROOM_RESERVATIONS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                roomReservations: action.data,
            };
        }
        case ROOM_RESERVATIONS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                errorReason: action.error,
            };
        }
        case ROOM_SELECT_REQUEST: {
            return {
                ...state,
                selectedRoom: action.data,
            }
        }
        case START_TIME_SELECT: {
            return {
                ...state,
                startTime: action.data
            }
        }
        case END_TIME_SELECT: {
            return {
                ...state,
                endTime: action.data
            }
        }
        case DATE_SELECT: {
            return {
                ...state,
                date: action.data
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
}