import {initialState} from "./room"



export const CREATEROOM_REQUEST = 'CREATEROOM_REQUEST';

export const CREATEROOM_SUCCESS = 'CREATEROOM_SUCCESS';

export const CREATEROOM_FAILURE = 'CREATEROOM_FAILURE';

export const DELETEROOM_REQUEST =
    'DELETEROOM_REQUEST';

export const DELETEROOM_SUCCESS =
    'DELETEROOM_SUCCESS';

export const DELETEROOM_FAILURE =
    'DELETEROOM_FAILURE';


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
            default: {
                return {
                    ...state,
                };
            }
        }
    }