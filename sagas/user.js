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
            var result = {
                data: response.data,
                me: loginData.id
            };
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

        if (result.data.result === "success") {
            yield put({ // put은 dispatch 동일
                type: LOG_IN_SUCCESS,
                data: result.me
            });
            localStorage.setItem("accessToken", result.data.accessToken);
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
    form.append('email', signUpData.email)
    form.append('studentid', signUpData.id)
    form.append('password', signUpData.password)
    form.append('name', signUpData.name)
    form.append('telephone', signUpData.telephone)

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
    return axios.get('/user/', {
        withCredentials: true,
    });
}

function* loadUser() {
    try {
        // yield call(loadUserAPI);
        const result = yield call(loadUserAPI);
        yield put({ // put은 dispatch 동일
            type: LOAD_USER_SUCCESS,
            data: result.data,
        });
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOAD_USER_FAILURE,
            error: e,
        });
    }
}

function* watchLoadUser() {
    yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchSignUp),
    ]);
}