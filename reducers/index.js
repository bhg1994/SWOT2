import {
    combineReducers
} from "redux";
import user from './user';
import post from './post';
import room from './room';


const rootReducer = combineReducers({
    user,
    post,
    room
});

export default rootReducer;