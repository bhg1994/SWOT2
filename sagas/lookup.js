import {
    all,
    call,
    fork,
    put,
    takeEvery
} from 'redux-saga/effects';
import axios from 'axios';

import {
    RESERVATION_STATUS_REQUEST,
    RESERVATION_STATUS_SUCCESS,
    RESERVATION_STATUS_FAILURE
} from '../reducers/lookup';


function reservationStatusAPI(reservateStatusData) {

    let url = "http://swot.devdogs.kr:8080/api/reservation/MyReserved"

    const token = localStorage.getItem("accessToken");

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

function* reservationStatus(action) {
    try {

        const result = yield call(reservationStatusAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: RESERVATION_STATUS_SUCCESS,
                data: result.info
            });
        }
        else {
            yield put({
                type: RESERVATION_STATUS_FAILURE,
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: RESERVATION_STATUS_FAILURE,
        });
        // alert("통신 장애");
    }
}

function* watchReservationStatus() {
    yield takeEvery(RESERVATION_STATUS_REQUEST, reservationStatus);
}

export default function* lookupSaga() {
    yield all([
        fork(watchReservationStatus)
    ]);
}