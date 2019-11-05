import {
    all,
    delay,
    fork,
    put,
    takeEvery,
    call
} from 'redux-saga/effects';
import {
    LOAD_NOTIFYCATIONS_REQUEST,
    LOAD_NOTIFYCATIONS_SUCCESS,
    LOAD_NOTIFYCATIONS_FAILURE,
    CREATE_NOTIFYCATIONS_REQUEST,
    CREATE_NOTIFYCATIONS_SUCCESS,
    CREATE_NOTIFYCATIONS_FAILURE,
    DELETE_NOTIFYCATIONS_REQUEST,
    DELETE_NOTIFYCATIONS_SUCCESS,
    DELETE_NOTIFYCATIONS_FAILURE,
    MODIFY_NOTIFYCATIONS_REQUEST,
    MODIFY_NOTIFYCATIONS_SUCCESS,
    MODIFY_NOTIFYCATIONS_FAILURE,

    LOAD_STUDYBOARDS_REQUEST,
    LOAD_STUDYBOARDS_SUCCESS,
    LOAD_STUDYBOARDS_FAILURE,
} from '../reducers/post';
import axios from 'axios';

// 공지사항 글 불러오기 

function loadNotifycationsAPI() {

    return axios.get('http://swot.devdogs.kr:8080/api/auth/board/1/list'
    ).then(response => {
        console.log('response : ', JSON.stringify(response, null, 2))
        var result = response.data;
        return result;
    })
        .catch(error => {
            console.log('failed', error)
            return error;
        });
}

function* loadNotifycations() {
    try {
        const result = yield call(loadNotifycationsAPI);

        if (result.result === "success") {
            yield put({
                type: LOAD_NOTIFYCATIONS_SUCCESS,
                data: result.info,
            });
        } else {
            yield put({
                type: LOAD_NOTIFYCATIONS_FAILURE,
            });
        }
    }
    catch (e) {
        yield put({
            type: LOAD_NOTIFYCATIONS_FAILURE,
            error: e,
        });
    }
}

function* watchLoadNotifycations() {
    yield takeEvery(LOAD_NOTIFYCATIONS_REQUEST, loadNotifycations);
}


// 공지사항 글 작성

function createNotifycationsAPI(notificationInfo) {

    console.log(notificationInfo);
    let form = new FormData()
    form.append('code', notificationInfo.code)
    form.append('title', notificationInfo.title)
    form.append('body', notificationInfo.body)


    let token = localStorage.getItem("accessToken");

    return axios.post('http://swot.devdogs.kr:8080/api/board/create', form,
        {
            headers: { // 요청 헤더
                Authorization: token,
            },
        }
    ).then(response => {
        console.log('response : ', JSON.stringify(response, null, 2))
        var result = response.data;
        return result;
    })
        .catch(error => {
            console.log('failed', error)
            return error;
        });
}

function* createNotifycations(action) {
    try {
        const result = yield call(createNotifycationsAPI, action.data);

        if (result.result === "success") {
            yield put({
                type: CREATE_NOTIFYCATIONS_SUCCESS,
                data: result.info,
            });
            alert('글이 작성되었습니다.');
        } else {
            yield put({
                type: CREATE_NOTIFYCATIONS_FAILURE,
            });
            alert("글 작성 X");
        }
    }
    catch (e) {
        yield put({
            type: CREATE_NOTIFYCATIONS_FAILURE,
            error: e,
        });
        alert('통신 오류 실패.');
    }
}

function* watchCreateNotifycations() {
    yield takeEvery(CREATE_NOTIFYCATIONS_REQUEST, createNotifycations);
}

// 공지사항 글 삭제

function deleteNotifycationsAPI(notificationInfo) {

    let id = notificationInfo.id

    let token = localStorage.getItem("accessToken");

    return axios.get('http://swot.devdogs.kr:8080/api/board/delete/' + id,
        {
            headers: { // 요청 헤더
                Authorization: token,
            },
        }
    ).then(response => {
        console.log('response : ', JSON.stringify(response, null, 2))
        var result = response.data;
        return result;
    })
        .catch(error => {
            console.log('failed', error)
            return error;
        });
}

function* deleteNotifycations(action) {
    try {
        const result = yield call(deleteNotifycationsAPI, action.data);

        if (result.result === "success") {
            yield put({
                type: DELETE_NOTIFYCATIONS_SUCCESS,
            });
            yield put({
                type: LOAD_NOTIFYCATIONS_REQUEST,
            })
            alert('글이 삭제되었습니다.');
        } else {
            yield put({
                type: DELETE_NOTIFYCATIONS_FAILURE,
            });
            alert("글 삭제 X");
        }
    }
    catch (e) {
        yield put({
            type: DELETE_NOTIFYCATIONS_FAILURE,
            error: e,
        });
        alert('통신 오류 실패.');
    }
}

function* watchDeleteNotifycations() {
    yield takeEvery(DELETE_NOTIFYCATIONS_REQUEST, deleteNotifycations);
}


// 공지사항 글 수정
function modifyNotifycationsAPI(notificationInfo) {

    let id = notificationInfo.id

    let form = new FormData()
    form.append('title', notificationInfo.title)
    form.append('body', notificationInfo.body)

    let token = localStorage.getItem("accessToken");


    return axios.post('http://swot.devdogs.kr:8080/api/board/modify/' + id, form,
        {
            headers: { // 요청 헤더
                Authorization: token,
            },
        }
    ).then(response => {
        console.log('response : ', JSON.stringify(response, null, 2))
        var result = response.data;
        return result;
    })
        .catch(error => {
            console.log('failed', error)
            return error;
        });
}

function* modifyNotifycations(action) {
    try {
        const result = yield call(modifyNotifycationsAPI, action.data);

        console.log(result.result);

        if (result.result === "success") {
            yield put({
                type: MODIFY_NOTIFYCATIONS_SUCCESS,
            });
            yield put({
                type: LOAD_NOTIFYCATIONS_REQUEST,
            })
            alert('글이 수정되었습니다.');
        } else {
            yield put({
                type: MODIFY_NOTIFYCATIONS_FAILURE,
            });
            alert("글 수정 X");
        }
    }
    catch (e) {
        yield put({
            type: MODIFY_NOTIFYCATIONS_FAILURE,
            error: e,
        });
        alert('통신 오류 실패.');
    }
}

function* watchModifyNotifycations() {
    yield takeEvery(MODIFY_NOTIFYCATIONS_REQUEST, modifyNotifycations);
}


function loadStudyboardsAPI(requestData) {
    const data = [
        {
            key: "1",
            number: "1",
            title: "SWOT[안내] 홈페이지 점검 안내 공지 2018.09.21(토) 09:00 ~ 10:00",
            name: "운영자",
            views: "20",
            date: "2019.09.19",
            button: "삭제"
        },
        {
            key: "2",
            number: "2",
            title: "SWOT[안내] SWOT 멤버십 앱 다운로드 정상화 완료",
            name: "운영자",
            views: "24",
            date: "2019.09.22",
            button: "삭제"
        },
        {
            key: "3",
            number: "3",
            title: "SWOT[안내] 앱 다운로드 오류 안내",
            name: "운영자",
            views: "14",
            date: "2019.09.24",
            button: "삭제"
        },
        {
            key: "4",
            number: "4",
            title: "SWOT[긴급안내] 현재 홈페이지에서 발견되는 오류와 관련한 진행사항",
            name: "운영자",
            views: "29",
            date: "2019.09.26",
            button: "삭제"
        }
    ];
    return data;
}

function* loadStudyboards(action) {
    try {
        const result = yield call(loadStudyboardsAPI, action.data);
        yield delay(2000);
        yield put({
            type: LOAD_STUDYBOARDS_SUCCESS,
            data: result,
        });
    } catch (e) {
        yield put({
            type: LOAD_STUDYBOARDS_FAILURE,
            error: e,
        });
    }
}

function* watchLoadStudyboards() {
    yield takeEvery(LOAD_STUDYBOARDS_REQUEST, loadStudyboards);
}



export default function* postSaga() {
    yield all([
        fork(watchLoadNotifycations),
        fork(watchLoadStudyboards),
        fork(watchCreateNotifycations),
        fork(watchDeleteNotifycations),
        fork(watchModifyNotifycations)
    ]);
}