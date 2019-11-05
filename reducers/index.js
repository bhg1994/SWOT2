import {
    combineReducers
} from "redux";
import user from './user';
import post from './post';
import room from './room';

import master from './master';

import question from './question';
import lookup from './lookup';
import comment from './comment';

const rootReducer = combineReducers({
    user,
    post,
    room,
    master,
    question,
    lookup,
    comment
});

export default rootReducer;