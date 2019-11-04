import {
    combineReducers
} from "redux";
import user from './user';
import post from './post';
import room from './room';
import master from './master';


const rootReducer = combineReducers({
    user,
    post,
    room,
    master
});

export default rootReducer;