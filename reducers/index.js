import {
    combineReducers
} from "redux";
import user from './user';
import post from './post';
import room from './room';

import master from './master';

import question from './question';
import lookup from './lookup';


const rootReducer = combineReducers({
    user,
    post,
    room,
    master,
    question,
    lookup
});

export default rootReducer;