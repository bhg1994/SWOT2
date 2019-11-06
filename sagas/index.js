import {
    all,
    fork
} from 'redux-saga/effects';
import user from './user';
import post from './post';
import room from './room';

import master from './master';

import lookup from './lookup';
import comment from './comment';

export default function* rootSaga() {
    yield all([
        fork(user),
        fork(post),
        fork(room),
        fork(master),
        fork(lookup),
        fork(comment)
    ]);
}