export const initialState = {
    isLoading: false,
    selectedQuestion: null,
}

export const QUESTION_SELECT_REQUEST = 'QUESTION_SELECT_REQUEST';


export default (state = initialState, action) => {
    switch (action.type) {

        case QUESTION_SELECT_REQUEST: {
            return {
                ...state,
                selectedQuestion: action.data,
            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
}