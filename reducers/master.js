export const initialState = {
    reservationErrorReason: "",
    isLoading: false,
    totalRoomList: [],
    errorReason: "",
    reservationsList: [],
    deleteRoomReason: "",
    createRoomReason:"",
    roomListErrorReason: ""
};



export const CREATEROOM_REQUEST = 'CREATEROOM_REQUEST';
export const CREATEROOM_SUCCESS = 'CREATEROOM_SUCCESS';
export const CREATEROOM_FAILURE = 'CREATEROOM_FAILURE';

export const DELETEROOM_REQUEST = 'DELETEROOM_REQUEST';
export const DELETEROOM_SUCCESS = 'DELETEROOM_SUCCESS';
export const DELETEROOM_FAILURE = 'DELETEROOM_FAILURE';

export const MODIFY_ROOM_REQUEST = 'MODIFY_ROOM_REQUEST';
export const MODIFY_ROOM_SUCCESS = 'MODIFY_ROOM_SUCCESS';
export const MODIFY_ROOM_FAILURE = 'MODIFY_ROOM_FAILURE';


export const LOAD_RESERVATIONS_REQUEST = 'LOAD_RESERVATIONS_REQUEST'
export const LOAD_RESERVATIONS_SUCCESS = 'LOAD_RESERVATIONS_SUCCESS'
export const LOAD_RESERVATIONS_FAILURE = 'LOAD_RESERVATIONS_FAILURE'

export const LOAD_ROOMLIST_REQUEST = 'LOAD_ROOMLIST_REQUEST';
export const LOAD_ROOMLIST_SUCCESS = 'LOAD_ROOMLIST_SUCCESS';
export const LOAD_ROOMLIST_FAILURE = 'LOAD_ROOMLIST_FAILURE';

export const RESERVATION_SUBMIT_REQUEST = 'RESERVATION_SUBMIT_REQUEST';
export const RESERVATION_SUBMIT_SUCCESS = 'RESERVATION_SUBMIT_SUCCESS';
export const RESERVATION_SUBMIT_FAILURE = 'RESERVATION_SUBMIT_FAILURE';

export const RESERVATION_DECLINE_REQUEST = 'RESERVATION_DECLINE_REQUEST';
export const RESERVATION_DECLINE_SUCCESS = 'RESERVATION_DECLINE_SUCCESS';
export const RESERVATION_DECLINE_FAILURE = 'RESERVATION_DECLINE_FAILURE';

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATEROOM_REQUEST: {
            return {
                ...state,
                isLoading: true,
                createRoomReason: ""
            }
        }
        case CREATEROOM_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                totalRoomList: [...state.totalRoomList, action.data]
                // totalRoomList: action.data
            }
        }
        case CREATEROOM_FAILURE: {
            return {
                ...state,
                isLoading: false,
                createRoomReason: action.error
            }
        }
        case DELETEROOM_REQUEST: {
            return {
                ...state,
                isLoading: true,
                deleteRoomReason: ""
            }
        }
        case DELETEROOM_SUCCESS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case DELETEROOM_FAILURE: {
            return {
                ...state,
                isLoading: false,
                createRoomReason: action.error
            }
        }
        case LOAD_RESERVATIONS_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOAD_RESERVATIONS_SUCCESS: {
            return {
                ...state,
                isLoading: true,
                reservationsList: action.data,
            }
        }
        case LOAD_RESERVATIONS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                createRoomReason: action.error
            }
        }
        case LOAD_ROOMLIST_REQUEST: {
            return {
                ...state,
                isLoading: true,
                roomListErrorReason: ""
            };
        }
        case LOAD_ROOMLIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                totalRoomList: action.data,
            };
        }
        case LOAD_ROOMLIST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                roomListErrorReason: action.error,
            };
        }
        case RESERVATION_SUBMIT_REQUEST: {
            return {
                ...state,
                isLoading: true,
                errorReason: ""
            };
        }
        case RESERVATION_SUBMIT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case RESERVATION_SUBMIT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                errorReason: action.error,
            };
        }
        case RESERVATION_DECLINE_REQUEST: {
            return {
                ...state,
                isLoading: true,
                errorReason: ""
            };
        }
        case RESERVATION_DECLINE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case RESERVATION_DECLINE_FAILURE: {
            return {
                ...state,
                isLoading: false,
                errorReason: action.error,
            };
        }
        case MODIFY_ROOM_REQUEST: {
            return {
                ...state,
                isLoading: true,
                errorReason: ""
            };
        }
        case MODIFY_ROOM_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                totalRoomList: [...state.totalRoomList, action.data],
            };
        }
        case MODIFY_ROOM_FAILURE: {
            return {
                ...state,
                isLoading: false,
                errorReason: action.error,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
}