import {
    all,
    call,
    fork,
    put,
    takeEvery
} from 'redux-saga/effects';
import axios from 'axios';

import {
    CREATEROOM_REQUEST,
    CREATEROOM_SUCCESS,
    CREATEROOM_FAILURE,
    DELETEROOM_REQUEST,
    DELETEROOM_SUCCESS,
    DELETEROOM_FAILURE,
    LOAD_RESERVATIONS_REQUEST,
    LOAD_RESERVATIONS_SUCCESS,
    LOAD_RESERVATIONS_FAILURE,
    LOAD_ROOMLIST_REQUEST,
    LOAD_ROOMLIST_SUCCESS,
    LOAD_ROOMLIST_FAILURE,
    RESERVATION_SUBMIT_FAILURE,
    RESERVATION_SUBMIT_REQUEST,
    RESERVATION_SUBMIT_SUCCESS,
    RESERVATION_DECLINE_REQUEST,
    RESERVATION_DECLINE_SUCCESS,
    RESERVATION_DECLINE_FAILURE,
    MODIFY_ROOM_REQUEST,
    MODIFY_ROOM_SUCCESS,
    MODIFY_ROOM_FAILURE,
} from '../reducers/master'

function createRoomAPI(createRoomData) {
    // 서버에 요청을 보내는 부분
    let form = new FormData()
    form.append('roomName', createRoomData.roomName)
    form.append('groupNo', createRoomData.groupNo)
    // 이거 왜있는 거?
    form.append('roomNo', createRoomData.roomNo)
    form.append('total', createRoomData.total)

    let token = localStorage.getItem("accessToken");


    return axios.post(`http://swot.devdogs.kr:8080/api/classroom/create`, form,
        {
            headers: {
                Authorization: token,
            },
        }
    )
        .then(response => {
            console.log('response : ', JSON.stringify(response, null, 2));
            let result = response.data;
            return result;
        })
        .catch(error => {
            console.log('failed', error)
            return error;
        })
}

function* createRoom(action) {
    try {
        const result = yield call(createRoomAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: CREATEROOM_SUCCESS,
                data: result.info
            });
            alert("강의실 생성 성공");
        }
        else {
            yield put({
                type: CREATEROOM_FAILURE,
            });
            alert("강의실 생성 실패");
        }

    } catch (e) { // createRoomAPI 실패
        console.error(e);
        yield put({
            type: ROOMLIST_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchCreateRoom() {
    yield takeEvery(CREATEROOM_REQUEST, createRoom);
}
// 강의실 삭제 - 관리자 권한

function deleteRoomAPI(deleteRoomData) {
    // 서버에 요청을 보내는 부분
    let id = deleteRoomData.id
    let url = "http://swot.devdogs.kr:8080/api/classroom/delete/" + id;

    let token = localStorage.getItem("accessToken");

    return axios.get(url,
        {
            headers: {
                Authorization: token,
            },
        }
    )
        .then(response => {
            console.log('response : ', JSON.stringify(response, null, 2));
            let result = response.data;
            return result;
        })
        .catch(error => {
            console.log('failed', error)
            return error;
        })
}

function* deleteRoom(action) {
    try {
        const result = yield call(deleteRoomAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: DELETEROOM_SUCCESS,
            });
            yield put({ // put은 dispatch 동일
                type: LOAD_ROOMLIST_REQUEST,
            });
            alert("강의실 삭제 성공");
        }
        else {
            yield put({
                type: DELETEROOM_FAILURE,
            });
            alert("강의실 삭제 실패");
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: DELETEROOM_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchDeleteRoom() {
    yield takeEvery(DELETEROOM_REQUEST, deleteRoom);
}

//  예약 로드

function loadReservationsAPI() {
    // 서버에 요청을 보내는 부분
    let url = "http://swot.devdogs.kr:8080/api/auth/reservation/list";



    return axios.get(url)
        .then(response => {
            console.log('response : ', JSON.stringify(response, null, 2));
            let result = response.data;
            return result;
        })
        .catch(error => {
            console.log('failed', error)
            return error;
        })
}

function* loadReservations(action) {
    try {
        const result = yield call(loadReservationsAPI);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: LOAD_RESERVATIONS_SUCCESS,
                data: result.info,
            });
        }
        else {
            yield put({
                type: LOAD_RESERVATIONS_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOAD_RESERVATIONS_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchLoadReservations() {
    yield takeEvery(LOAD_RESERVATIONS_REQUEST, loadReservations);
}

function loadRoomListAPI(token) {
    // 서버에 요청을 보내는 부분
    // let form = new FormData()
    // form.append('email', roomListData.id)
    // form.append('password', roomListData.password)
    return axios.get(`http://swot.devdogs.kr:8080/api/auth/classroom/list`,
        {
            headers: { // 요청 헤더
                Authorization: token,
            },
        }
    ).then(response => {
        console.log('response : ', JSON.stringify(response, null, 2));
        var result = response.data;
        return result;
    })
        .catch(error => {
            console.log('failed', error)
            return error;
        })

}



function* loadRoomList(action) {
    try {
        const result = yield call(loadRoomListAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: LOAD_ROOMLIST_SUCCESS,
                data: result.info,
            });
        }
        else {
            yield put({
                type: LOAD_ROOMLIST_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOAD_ROOMLIST_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchLoadRoomList() {
    yield takeEvery(LOAD_ROOMLIST_REQUEST, loadRoomList);
}

function submitAPI(requestData) {
    // 서버에 요청을 보내는 부분
    let url = "http://swot.devdogs.kr:8080/api/reservation/accept/"+requestData.id;
    return axios.get(url,
        {
            headers: { // 요청 헤더
                Authorization: requestData.token,
            },
        }
    ).then(response => {
        console.log('response : ', JSON.stringify(response, null, 2));
        var result = response.data;
        return result;
    })
        .catch(error => {
            console.log('failed', error)
            return error;
        })

}



function* submit(action) {
    try {
        const result = yield call(submitAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: RESERVATION_SUBMIT_SUCCESS,
            });
            yield put({ // put은 dispatch 동일
                type: LOAD_RESERVATIONS_REQUEST,
            });
        }
        else {
            yield put({
                type: RESERVATION_SUBMIT_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: RESERVATION_SUBMIT_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchSubmit() {
    yield takeEvery(RESERVATION_SUBMIT_REQUEST, submit);
}

function declineApi(requestData) {
    //서버에 요청을 보내는 부분
    console.log(requestData);
    let form = new FormData();
    form.append('failReason', requestData.reason);
    let url = "http://swot.devdogs.kr:8080/api/reservation/decline/"+requestData.id;
    return axios.post(url,form,
        {
            headers: { // 요청 헤더
                Authorization: requestData.token,
            },
        }
    ).then(response => {
        console.log('response : ', JSON.stringify(response, null, 2));
        var result = response.data;
        return result;
    })
        .catch(error => {
            console.log('failed', error)
            return error;
        })

}



function* decline(action) {
    try {
        const result = yield call(declineApi, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: RESERVATION_DECLINE_SUCCESS,
            });
            yield put({ // put은 dispatch 동일
                type: LOAD_RESERVATIONS_REQUEST,
            });
        }
        else {
            yield put({
                type: RESERVATION_DECLINE_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: RESERVATION_DECLINE_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchDecline() {
    yield takeEvery(RESERVATION_DECLINE_REQUEST, decline);
}

function modifyRoomApi(requestData) {
    //서버에 요청을 보내는 부분
    let form = new FormData()
    form.append('roomName', requestData.roomName)
    form.append('groupNo', requestData.groupNo)
    form.append('roomNo', requestData.roomNo)
    form.append('total', requestData.total)
    form.append('state', "T")
    
    console.log(requestData);
    console.log(form);

    let token = localStorage.getItem("accessToken");

    let url = `http://swot.devdogs.kr:8080/api/classroom/modify/`+requestData.id;


    return axios.post(url, form,
        {
            headers: {
                Authorization: token,
            },
        }
    )
        .then(response => {
            console.log('response : ', JSON.stringify(response, null, 2));
            let result = response.data;
            return result;
        })
        .catch(error => {
            console.log('failed', error)
            return error;
        })

}



function* modifyRoom(action) {
    try {
        const result = yield call(modifyRoomApi, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: MODIFY_ROOM_SUCCESS,
                data: result.info,
            });
        }
        else {
            yield put({
                type: MODIFY_ROOM_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: MODIFY_ROOM_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchModifyRoom() {
    yield takeEvery(MODIFY_ROOM_REQUEST, modifyRoom);
}

export default function* roomSaga() {
    yield all([
        fork(watchCreateRoom),
        fork(watchDeleteRoom),
        fork(watchLoadReservations),
        fork(watchLoadRoomList),
        fork(watchSubmit),
        fork(watchDecline),
        fork(watchModifyRoom)
    ]);
}