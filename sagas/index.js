import {
    all,
    fork
} from 'redux-saga/effects';
import user from './user';
import post from './post';
import room from './room';

import master from './master';


import question from './question';

import lookup from './lookup';

export default function* rootSaga() {
    yield all([
        fork(user),
        fork(post),
        fork(room),
        fork(master),
        fork(question),
        fork(lookup)
    ]);
}