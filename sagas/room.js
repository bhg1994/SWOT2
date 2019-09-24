import {
    all,
    call,
    fork,
    put,
    takeEvery
} from 'redux-saga/effects';
import axios from 'axios';

import {
    RESERVATION_FAILURE,
    RESERVATION_REQUEST,
    RESERVATION_SUCCESS,
    ROOMLIST_FAILURE,
    ROOMLIST_REQUEST,
    ROOMLIST_SUCCESS,
} from '../reducers/room'

function reservateAPI(reservateData) {
    // 서버에 요청을 보내는 부분
    let form = new FormData()
    // form.append('email', reservateData.id)
    // form.append('password', reservateData.password)

    return axios.post(`http://swot.devdogs.kr:8080/api/auth/reservation`, form)
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

function* reservate(action) {
    try {
        
        const result = yield call(reservateAPI, action.data);

        if(result.statusMsg==="success"){
            yield put({ // put은 dispatch 동일
                type: RESERVATION_SUCCESS,
            });
            alert("예약 성공");
            location.href = "/"
        }
        else{
            yield put({
                type: RESERVATION_FAILURE,
            });
            alert("예약 실패");
            location.href = "/Reservation"
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: RESERVATION_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchReservation() {
    yield takeEvery(RESERVATION_REQUEST, reservate);
}



function roomListAPI(roomListData) {
    // 서버에 요청을 보내는 부분
    let form = new FormData()
    // form.append('email', roomListData.id)
    // form.append('password', roomListData.password)

    return axios.post(`http://swot.devdogs.kr:8080/api/auth/roomlist`, form)
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

function* roomList(action) {
    try {
        
        const result = yield call(roomListAPI, action.data);

        if(result.statusMsg==="success"){
            yield put({ // put은 dispatch 동일
                type: ROOMLIST_SUCCESS,
            });
        }
        else{
            yield put({
                type: ROOMLIST_FAILURE,
            });
            alert("룸리스트 불러오기 실패");
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: ROOMLIST_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchRoomList() {
    yield takeEvery(ROOMLIST_REQUEST, roomList);
}







export default function* roomSaga() {
    yield all([
        fork(watchReservation),
        fork(watchRoomList),
    ]);
}