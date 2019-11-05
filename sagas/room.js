import {
    all,
    call,
    fork,
    put,
    takeEvery
} from 'redux-saga/effects';
import axios from 'axios';
import moment from 'moment';

import {
    RESERVATION_FAILURE,
    RESERVATION_REQUEST,
    RESERVATION_SUCCESS,
    ROOM_RESERVATIONS_REQUEST,
    ROOM_RESERVATIONS_SUCCESS,
    ROOM_RESERVATIONS_FAILURE,
} from '../reducers/room'

function reservateAPI(reservateData) {

    let startTime = reservateData.startTime + ":00"
    let endTime = reservateData.endTime + ":00"
    let form = new FormData()
    form.append('reason', reservateData.reason)
    form.append('phone', reservateData.phone)
    form.append('startTime', startTime)
    form.append('endTime', endTime)
    form.append('reservationDate', reservateData.date)
    form.append('total', reservateData.maximum);

    console.log(form);
    let url = "http://swot.devdogs.kr:8080/api/reservation/create/" + reservateData.selectedRoom;
    console.log(url);

    return axios.post(url, form,
        {
            headers: { // 요청 헤더
                Authorization: reservateData.token,
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

function* reservate(action) {
    try {

        const result = yield call(reservateAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: RESERVATION_SUCCESS,
            });
            location.href = "/profile";
        }
        else {
            yield put({
                type: RESERVATION_FAILURE,
            });
            location.href = "/";
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






function roomReservationsAPI(data) {
    // 서버에 요청을 보내는 부분

    let url = "http://swot.devdogs.kr:8080/api/auth/reservation/roomReserved/" + data.roomId;
    return axios.get(url).then(response => {
        console.log('response : ', JSON.stringify(response, null, 2));
        var result = response.data;
        return result;
    })
        .catch(error => {
            console.log('failed', error)
            return error;
        })

}


function* roomReservations(action) {
    try {
        const result = yield call(roomReservationsAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: ROOM_RESERVATIONS_SUCCESS,
                data: result.info,
            });
        }
        else {
            yield put({
                type: ROOM_RESERVATIONS_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: ROOM_RESERVATIONS_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchRoomReservations() {
    yield takeEvery(ROOM_RESERVATIONS_REQUEST, roomReservations);
}


export default function* roomSaga() {
    yield all([
        fork(watchReservation),
        fork(watchRoomReservations),
    ]);
}