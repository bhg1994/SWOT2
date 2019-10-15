import {
    all,
    call,
    fork,
    put,
    takeEvery
} from 'redux-saga/effects';
import axios from 'axios';
import {
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
} from '../reducers/user';

function logInAPI(loginData) {
    // 서버에 요청을 보내는 부분
    let form = new FormData()
    form.append('email', loginData.id)
    form.append('password', loginData.password)

    return axios.post(`http://swot.devdogs.kr:8080/api/auth/user/signin`, form)
        .then(response => {
            console.log("id,password : " + loginData.id, loginData.password);
            console.log('response : ', JSON.stringify(response, null, 2));
            var result =  response.data;
            return result;
        })
        .catch(error => {
            console.log('failed', error)
            return error;
        })
}

function* logIn(action) {
    try {

        const result = yield call(logInAPI, action.data);
        console.log(result.result);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: LOG_IN_SUCCESS,
            });
            localStorage.setItem("accessToken", result.accessToken);
            alert("로그인 성공");
            location.href = "/"
        } else {
            yield put({
                type: LOG_IN_FAILURE,
            });
            alert("로그인 정보 틀림");
            //location.href = "/login"
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
        alert("통신 장애");
    }
}

function* watchLogIn() {
    yield takeEvery(LOG_IN_REQUEST, logIn);
}

function signUpAPI(signUpData) {
    console.log(signUpData);
    // 서버에 요청을 보내는 부분
    let form = new FormData()
    form.append('email', signUpData.id)
    form.append('password', signUpData.password)
    form.append('name', signUpData.name)
    form.append('major_no', signUpData.telephone)

    return axios.post(`http://swot.devdogs.kr:8080/api/auth/user/signup`, form)
        .then(response => {
            console.log('response : ', JSON.stringify(response, null, 2))
            var result = response.data;
            return result;
        })
        .catch(error => {
            console.log('failed', error)
            return error;
        })
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);

        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: SIGN_UP_SUCCESS,
            });
            alert("이메일인증 진행 후 다시 로그인 해 주세요");
            location.href = "/login";
        } else {
            yield put({
                type: SIGN_UP_FAILURE,
            });
            alert("오류. 다시 진행해");
            location.href = "/signup";
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        });
        alert("오류. 다시 진행해");
        location.href = "/signup";
    }
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function logOutAPI() {
    // 서버에 요청을 보내는 부분
    return axios.post('/user/logout', {}, {
        withCredentials: true,
    });
}

function* logOut() {
    try {
        // yield call(logOutAPI);
        yield call(logOutAPI);
        yield put({ // put은 dispatch 동일
            type: LOG_OUT_SUCCESS,
        });
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_OUT_FAILURE,
            error: e,
        });
    }
}

function* watchLogOut() {
    yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function loadUserAPI() {
    // 서버에 요청을 보내는 부분

    //let token = localStorage.getItem("accessToken");
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzIzMjgzMzYsInN1YiI6IjEyIn0.sXEBhblOJfaoIU6seaZnJQE49Uw9x-Rx7CI4w5HhCAo"
    console.log(token);
    return axios.get('http://swot.devdogs.kr:8080/api/user/myinfo', 
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

function loadUserAPI2(){
    let token = localStorage.getItem("accessToken");
    var req = new XMLHttpRequest();
    req.open('GET', 'http://10.0.102.235/api/user/myinfo', true);
    req.setRequestHeader("Authorization", token);
    req.withCredentials=true;
    req.onreadystatechange = function (aEvt) {
    if (req.readyState == 4) {
        console.log(req);
        console.log("Status: ", req.status);
        console.log("Response message: ", req.responseText);
        }
    };
    return req.send();
}

function loadUserAPI3(){
    var me = {
        name:"name",
        email:"email",
    }
    return me
}

function* loadUser() {
    try {
        const result = yield call(loadUserAPI);
        if (result.result === "success") {
        yield put({ 
            type: LOAD_USER_SUCCESS,
            data: result.data,
        });
    }
    } catch (e) { 
        console.error(e);
        yield put({
            type: LOAD_USER_FAILURE,
            error: e,
        });
    }
}

function* loadUser2() {
    try {
        const result = yield call(loadUserAPI3);
        
        yield put({ 
            type: LOAD_USER_SUCCESS,
            data: result,
        });
    } catch (e) { 
        console.error(e);
        yield put({
            type: LOAD_USER_FAILURE,
            error: e,
        });
    }
}

function* watchLoadUser() {
    yield takeEvery(LOAD_USER_REQUEST, loadUser2);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchSignUp),
    ]);
}