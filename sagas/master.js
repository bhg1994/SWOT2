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
    console.log("생성전 토큰 : " + createRoomData.roomName, createRoomData.groupNo, createRoomData.roomNo, createRoomData.total);


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

        console.log(result.info);

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
    console.log(id);

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
                type: ROOMLIST_REQUEST,
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

export default function* roomSaga() {
    yield all([
        fork(watchCreateRoom),
        fork(watchDeleteRoom),
    ]);
}