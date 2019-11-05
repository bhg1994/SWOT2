import {
    all,
    call,
    fork,
    put,
    takeEvery
} from 'redux-saga/effects';
import axios from 'axios';

import {

    CREATE_COMMENT_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAILURE,
    LOAD_COMMENT_REQUEST,
    LOAD_COMMENT_SUCCESS,
    LOAD_COMMENT_FAILURE
} from '../reducers/comment';

// 댓글 로드


function loadCommentsAPI(loadCommentsData) {

    console.log(loadCommentsData);

    let url = "http://swot.devdogs.kr:8080/api/auth/comment/" + loadCommentsData.boardId;

    return axios.get(url)
        .then(response => {
            console.log('response : ', JSON.stringify(response, null, 2));
            var result = response.data;
            return result;
        })
        .catch(error => {
            console.log('failed', error)
            return error;
        })
}

function* loadComments(action) {
    try {
        const result = yield call(loadCommentsAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: LOAD_COMMENT_SUCCESS,
                data: result.info
            });
        }
        else {
            yield put({
                type: LOAD_COMMENT_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOAD_COMMENT_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchLoadComments() {
    yield takeEvery(LOAD_COMMENT_REQUEST, loadComments);
}

function createCommentAPI(createCommentData) {

    let form = new FormData()
    form.append('boardId', createCommentData.boardId)
    form.append('bodyText', createCommentData.bodyText)

    console.log(form);
    let url = "http://swot.devdogs.kr:8080/api/comment/create/"

    let token = localStorage.getItem("accessToken");

    return axios.post(url, form,
        {
            headers: { // 요청 헤더
                Authorization: token,
            },
        })
        .then(response => {
            console.log('response : ', JSON.stringify(response, null, 2));
            var result = {
                data: response.data,
                id: createCommentData.boardId,
            }
            return result;
        })
        .catch(error => {
            console.log('failed', error)
            return error;
        })
}

function* createComment(action) {
    try {
        const result = yield call(createCommentAPI, action.data);

        if (result.data.result === "success") {
            yield put({ // put은 dispatch 동일
                type: CREATE_COMMENT_SUCCESS
            });
            alert('댓글 성공');

            yield put({
                type: LOAD_COMMENT_REQUEST,
                data: {
                    boardId: result.id
                }
            })
        }
        else {
            yield put({
                type: CREATE_COMMENT_FAILURE,
            });
            alert('댓글 실패');
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: CREATE_COMMENT_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchCreateComment() {
    yield takeEvery(CREATE_COMMENT_REQUEST, createComment);
}

export default function* commentSaga() {
    yield all([
        fork(watchCreateComment),
        fork(watchLoadComments),
    ]);
}

