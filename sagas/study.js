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
    STUDY_APPLY_FAILURE,
    STUDY_MYAPPLY_REQUEST,
    STUDY_MYAPPLY_SUCCESS,
    STUDY_MYAPPLY_FAILURE,
    STUDY_MYAPPLYCANCEL_REQUEST,
    STUDY_MYAPPLYCANCEL_SUCCESS,
    STUDY_MYAPPLYCANCEL_FAILURE,
    STUDY_RESERVATION_REQUEST,
    STUDY_RESERVATION_SUCCESS,
    STUDY_RESERVATION_FAILURE,
    STUDY_ACCEPT_REQUEST,
    STUDY_ACCEPT_SUCCESS,
    STUDY_ACCEPT_FAILURE,
    STUDY_REJECT_REQUEST,
    STUDY_REJECT_SUCCESS,
    STUDY_REJECT_FAILURE,
    STUDY_CONFIRM_REQUEST,
    STUDY_CONFIRM_FAILURE,
    STUDY_CONFIRM_SUCCESS

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


// 내가 신청한 스터디 조회 Saga
function myStudyapplyAPI() {

    let url = "http://swot.devdogs.kr:8080/api/study/application/myStudy"

    let token = localStorage.getItem("accessToken");

    return axios.get(url,
        {
            headers: { // 요청 헤더
                Authorization: token,
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

function* myStudyapply() {
    try {

        const result = yield call(myStudyapplyAPI);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: STUDY_MYAPPLY_SUCCESS,
                data: {
                    boards: result.boards,
                    applications: result.applications
                }
            });
        }
        else {
            yield put({
                type: STUDY_MYAPPLY_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: STUDY_MYAPPLY_FAILURE,
        });
    }
}

function* watchmyStudyapply() {
    yield takeEvery(STUDY_MYAPPLY_REQUEST, myStudyapply);
}


// 내가 신청한 스터디 취소
function myStudyapplyCancelAPI(studycancelData) {

    console.log(studycancelData.id);

    let url = "http://swot.devdogs.kr:8080/api/study/application/delete/" + studycancelData.id

    return axios.get(url,
        {
            headers: { // 요청 헤더
                Authorization: studycancelData.token,
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

function* myStudyapplyCancel(action) {
    try {

        const result = yield call(myStudyapplyCancelAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: STUDY_MYAPPLYCANCEL_SUCCESS,
            });
        }
        else {
            yield put({
                type: STUDY_MYAPPLYCANCEL_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: STUDY_MYAPPLYCANCEL_FAILURE,
        });
    }
}

function* watchmyStudyapplyCancel() {
    yield takeEvery(STUDY_MYAPPLYCANCEL_REQUEST, myStudyapplyCancel);
}

// 특정 스터디 조회 Saga

function studyReservationAPI(studyReservationData) {

    let boardId = studyReservationData.boardId;

    let url = "http://swot.devdogs.kr:8080/api/study/application/" + boardId + "/list"
    console.log(boardId);

    return axios.get(url,
        {
            headers: { // 요청 헤더
                Authorization: studyReservationData.token,
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

function* studyReservation(action) {
    try {
        const result = yield call(studyReservationAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: STUDY_RESERVATION_SUCCESS,
                data: {
                    users: result.users,
                    applications: result.applications,
                }

            });
        }
        else {
            yield put({
                type: STUDY_RESERVATION_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: STUDY_RESERVATION_FAILURE,
        });
    }
}

function* watchStudyReservation() {
    yield takeEvery(STUDY_RESERVATION_REQUEST, studyReservation);
}

// 수락 Saga
function studyacceptAPI(studyacceptData) {

    console.log(studyacceptData.leaderId);

    let url = "http://swot.devdogs.kr:8080/api/study/application/accept/" + studyacceptData.leaderId

    return axios.get(url,
        {
            headers: { // 요청 헤더
                Authorization: studyacceptData.token,
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

function* studyaccept(action) {
    try {
        const result = yield call(studyacceptAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: STUDY_ACCEPT_SUCCESS,
            });
        }
        else {
            yield put({
                type: STUDY_ACCEPT_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: STUDY_ACCEPT_FAILURE,
        });
    }
}

function* watchStudyaccept() {
    yield takeEvery(STUDY_ACCEPT_REQUEST, studyaccept);
}


// 거절 Saga
function studyrejectAPI(studyrejectData) {

    let url = "http://swot.devdogs.kr:8080/api/study/application/decline/" + studyrejectData.leaderId

    return axios.get(url,
        {
            headers: { // 요청 헤더
                Authorization: studyrejectData.token,
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

function* studyreject(action) {
    try {
        const result = yield call(studyrejectAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: STUDY_REJECT_SUCCESS,
            });
        }
        else {
            yield put({
                type: STUDY_REJECT_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: STUDY_REJECT_FAILURE,
        });
    }
}

function* watchStudyreject() {
    yield takeEvery(STUDY_REJECT_REQUEST, studyreject);
}

//확정
function studyConfirmAPI(studyConfirmData) {

    let url = "http://swot.devdogs.kr:8080/api/board/complete/" + studyConfirmData.id
    console.log(url);

    return axios.get(url,
        {
            headers: { // 요청 헤더
                Authorization: studyConfirmData.token,
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

function* studyConfirm(action) {
    try {
        const result = yield call(studyConfirmAPI,action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: STUDY_CONFIRM_SUCCESS,
            });
        }
        else {
            yield put({
                type: STUDY_CONFIRM_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: STUDY_CONFIRM_FAILURE,
        });
    }
}

function* watchStudyConfirm() {
    yield takeEvery(STUDY_CONFIRM_REQUEST, studyConfirm);
}

export default function* studySaga() {
    yield all([
        fork(watchStudyapply),
        fork(watchmyStudyapply),
        fork(watchmyStudyapplyCancel),
        fork(watchStudyReservation),
        fork(watchStudyaccept),
        fork(watchStudyreject),
        fork(watchStudyConfirm),
    ]);
}