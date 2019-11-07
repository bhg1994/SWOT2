import {
    all,
    call,
    fork,
    put,
    takeEvery
} from 'redux-saga/effects';
import axios from 'axios';

import {
    STUDY_APPLY_REQUEST,
    STUDY_APPLY_SUCCESS,
    STUDY_APPLY_FAILURE
} from '../reducers/study';


function studyapplyAPI(studyapplyData) {

    let form = new FormData();
    form.append('boardId', studyapplyData.boardId);
    form.append('applicationDate', studyapplyData.applicationDate)

    let url = "http://swot.devdogs.kr:8080/api/study/application/create"

    return axios.post(url, form,
        {
            headers: { // 요청 헤더
                Authorization: studyapplyData.token,
            },
        })
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

function* studyapply(action) {
    try {

        const result = yield call(studyapplyAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: STUDY_APPLY_SUCCESS,
            });
            alert('신청이 완료되었습니다.');
        }
        else {
            yield put({
                type: STUDY_APPLY_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: STUDY_APPLY_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchStudyapply() {
    yield takeEvery(STUDY_APPLY_REQUEST, studyapply);
}


export default function* studySaga() {
    yield all([
        fork(watchStudyapply),
    ]);
}