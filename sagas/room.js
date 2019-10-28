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
    ROOMLIST_FAILURE,
    ROOMLIST_REQUEST,
    ROOMLIST_SUCCESS,
    CREATEROOM_REQUEST,
    CREATEROOM_SUCCESS,
    CREATEROOM_FAILURE
} from '../reducers/room'

function reservateAPI(reservateData) {

    var date = moment("2017-01-01").toDate;
    var sTime = moment('10:00:00', 'hh:mm:ss').toDate;
    var eTime = moment('12:00:00', 'hh:mm:ss').toDate;
    


    let form = new FormData()
    form.append('reason', reservateData.reason)
    form.append('phone', reservateData.phone)
    form.append('startTime',sTime)
    form.append('endTime',eTime)
    form.append('reservationDate',date)
    
    console.log(reservateData);
    let url = "http://swot.devdogs.kr:8080/api/reservation/create/"+reservateData.selectedRoom;
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
        }
        else {
            yield put({
                type: RESERVATION_FAILURE,
            });
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



function roomListAPI(token) {
    // 서버에 요청을 보내는 부분
    // let form = new FormData()
    // form.append('email', roomListData.id)
    // form.append('password', roomListData.password)
    

    return axios.get(`http://swot.devdogs.kr:8080/api/classroom/classrooms`, 
    {
        headers: { // 요청 헤더
            Authorization: token.token,
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



function* roomList(action) {
    try {

        const result = yield call(roomListAPI, action.data);

        if(result.result==="success"){

            yield put({ // put은 dispatch 동일
                type: ROOMLIST_SUCCESS,
                data: result.info,
            });
        }
        else {
            yield put({
                type: ROOMLIST_FAILURE,
            });
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

function createRoomAPI(createRoomData) {
    // 서버에 요청을 보내는 부분
    let form = new FormData()
    form.append('groupName', createRoomData.groupName) // 차후에 roomName으로 변경해야함
    form.append('groupNo', createRoomData.groupNo)
    // 이거 왜있는 거?
    form.append('roomNo', createRoomData.roomNo)
    form.append('total', createRoomData.total)

    let token = localStorage.getItem("accessToken");
    console.log("생성전 토큰 : " + createRoomData.groupName, createRoomData.groupNo, createRoomData.roomNo, createRoomData.total);


    return axios.post(`http://swot.devdogs.kr:8080/api/classroom/create`, form,
        {
            headers: {
                Authorization: token,
            },
        }
    )
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

function* createRoom(action) {
    try {
        const result = yield call(createRoomAPI, action.data);

        if (result.statusMsg === "success") {
            yield put({ // put은 dispatch 동일
                type: CREATEROOM_SUCCESS,
            });
        }
        else {
            yield put({
                type: CREATEROOM_FAILURE,
            });
            alert("강의실 생성 실패");
        }

    } catch (e) { // loginAPI 실패
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




export default function* roomSaga() {
    yield all([
        fork(watchReservation),
        fork(watchRoomList),
        fork(watchCreateRoom)
    ]);
}