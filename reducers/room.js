export const initialState = {
    reservationErrorReason: "",
    roomListErrorReason: "",
    createRoomReason: "",
    deleteRoomReason: "",
    isLoading: false,
    totalRoomList: [],
    selectedRoom: null,
};

export const RESERVATION_REQUEST = 'RESERVATION_REQUEST';
export const RESERVATION_SUCCESS = 'RESERVATION_SUCCESS';
export const RESERVATION_FAILURE = 'RESERVATION_FAILURE';

export const ROOMLIST_REQUEST = 'ROOMLIST_REQUEST';
export const ROOMLIST_SUCCESS = 'ROOMLIST_SUCCESS';
export const ROOMLIST_FAILURE = 'ROOMLIST_FAILURE';

export const CREATEROOM_REQUEST = 'CREATEROOM_REQUEST';

export const CREATEROOM_SUCCESS = 'CREATEROOM_SUCCESS';

export const CREATEROOM_FAILURE = 'CREATEROOM_FAILURE';

export const DELETEROOM_REQUEST =
    'DELETEROOM_REQUEST';

export const DELETEROOM_SUCCESS =
    'DELETEROOM_SUCCESS';

export const DELETEROOM_FAILURE =
    'DELETEROOM_FAILURE';


export const ROOM_SELECT_REQUEST = 'ROOM_SELECT_REQUEST';

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
                totalRoomList: action.data,
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
        case ROOM_SELECT_REQUEST: {
            return {
                ...state,
                selectedRoom: action.data,
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
}