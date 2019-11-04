import {
    combineReducers
} from "redux";
import user from './user';
import post from './post';
import room from './room';
import question from './question';


const rootReducer = combineReducers({
    user,
    post,
    room,
    question
});

export default rootReducer;