import {
    all,
    fork
} from 'redux-saga/effects';
import user from './user';
import post from './post';
import room from './room';
import question from './question';

export default function* rootSaga() {
    yield all([
        fork(user),
        fork(post),
        fork(room),
        fork(question)
    ]);
}