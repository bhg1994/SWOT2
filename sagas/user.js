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
    EMAIL_DUPLICATE_REQUEST,
    EMAIL_DUPLICATE_SUCCESS,
    EMAIL_DUPLICATE_FAILURE,
    USER_MODIFY_FAILURE,
    USER_MODIFY_REQUEST,
    USER_MODIFY_SUCCESS,
    USERPW_MODIFY_REQUEST,
    USERPW_MODIFY_SUCCESS,
    USERPW_MODIFY_FAILURE,
    USER_WITHDRAWAL_REQUEST,
    USER_WITHDRAWAL_SUCCESS,
    USER_WITHDRAWAL_FAILURE

} from '../reducers/user';

function logInAPI(loginData) {
    // 서버에 요청을 보내는 부분
    let form = new FormData()
    form.append('email', loginData.id)
    form.append('pw', loginData.password)


    return axios.post(`http://swot.devdogs.kr:8080/api/auth/user/signIn`, form)
        .then(response => {
            console.log("id,password : " + loginData.id, loginData.password);
            console.log('response : ', JSON.stringify(response, null, 2));
            var result = response.data;

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
        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: LOG_IN_SUCCESS,
            });
            localStorage.setItem("accessToken", result.token);
            yield put({
                type: LOAD_USER_REQUEST,
                data: result.token,
            })
            alert("로그인 성공");
        } else {
            yield put({
                type: LOG_IN_FAILURE,
            });
            console.log(result.error);
            alert("로그인 정보 틀림");
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
    form.append('studentId', signUpData.id)
    form.append('pw', signUpData.password)
    form.append('name', signUpData.name)
    form.append('phone', signUpData.telephone)
    form.append('statusMsg',"상태메세지를 입력하세요")

    return axios.post(`http://swot.devdogs.kr:8080/api/auth/user/signUp`, form)
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

// Email Duplicate Saga

function emailDuplicateAPI(emailDuplicateData) {
    console.log(emailDuplicateData);
    // 서버에 요청을 보내는 부분
    let form = new FormData()
    form.append('email', emailDuplicateData.email)

    return axios.post(`http://swot.devdogs.kr:8080/api/auth/user/emailDuplicate`, form)
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

function* emailDuplicate(action) {
    try {
        const result = yield call(emailDuplicateAPI, action.data);
        // 이메일 중복 시 result : fail , 사용 가능 시  result : success 로 변경
        if (result.result === "success") {
            yield put({ // put은 dispatch 동일
                type: EMAIL_DUPLICATE_SUCCESS,
            });
            alert("사용 가능한 이메일 입니다.");
        } else {
            yield put({
                type: EMAIL_DUPLICATE_FAILURE,
            });
            alert("이메일 중복입니다.");
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: EMAIL_DUPLICATE_FAILURE,
            error: e,
        });
        alert("오류. 다시 진행해");
    }
}

function* watchDuplicate() {
    yield takeEvery(EMAIL_DUPLICATE_REQUEST, emailDuplicate);
}

function logOutAPI() {
    // 서버에 요청을 보내는 부분
    localStorage.removeItem();
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

function loadUserAPI(acctoken) {
    // 서버에 요청을 보내는 부분

    let token = acctoken;
    return axios.get('http://swot.devdogs.kr:8080/api/user/myInfo',
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

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        if (result.result === "success") {
            localStorage.setItem("myInfo", JSON.stringify(result.info));
            yield put({
                type: LOAD_USER_SUCCESS,
            });
        }
        location.href = "/";
    } catch (e) {
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

function modifyAPI(modifyInfo) {
    // 서버에 요청을 보내는 부분
    let form = new FormData()
    form.append('statusMsg', modifyInfo.msg)
    form.append('studentId', modifyInfo.stId)
    form.append('name', modifyInfo.name)

    let token = localStorage.getItem("accessToken");
    return axios.post('http://swot.devdogs.kr:8080/api/user/modifyMyInfo', form,
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

function* userModify(action) {
    try {
        const result = yield call(modifyAPI, action.data);
        if (result.result === "success") {
            localStorage.setItem("myInfo", JSON.stringify(result.info));
            yield put({
                type: USER_MODIFY_SUCCESS,
            });
            alert("정보가 수정되었습니다.");
        }
    } catch (e) {
        console.error(e);
        yield put({
            type: USER_MODIFY_FAILURE,
            error: e,
        });
    }

}

function* watchModify() {
    yield takeEvery(USER_MODIFY_REQUEST, userModify);
}

// 유저 비밀번호 변경

function PwmodifyAPI(PwmodifyInfo) {
    // 서버에 요청을 보내는 부분
    let form = new FormData()
    form.append('email', PwmodifyInfo.email)
    form.append('modifyPw', PwmodifyInfo.modifyPw)

    return axios.post('http://swot.devdogs.kr:8080/api/auth/user/modifyPw', form)
        .then(response => {
            console.log('response : ', JSON.stringify(response, null, 2))
            var result = response.data;
            return result;
        })
        .catch(error => {
            console.log('failed', error)
            return error;
        });
}

function* userPwModify(action) {
    try {
        const result = yield call(PwmodifyAPI, action.data);

        if (result.result === "success") {
            yield put({
                type: USERPW_MODIFY_SUCCESS,
            });
            alert("이메일인증 진행 후 로그인 해 주세요");
        }
        else {
            yield put({
                type: USERPW_MODIFY_FAILURE,
            });
            alert("해당 이메일이 없습니다. 다시 확인해주세요")
        }
    }
    catch (e) {
        console.error(e);
        yield put({
            type: USERPW_MODIFY_FAILURE,
            error: e,
        });
        alert("해당 이메일이 없습니다. 다시 확인해주세요")
    }

}

function* watchPwModify() {
    yield takeEvery(USERPW_MODIFY_REQUEST, userPwModify);
}

function withdrawAPI() {
    // 서버에 요청을 보내는 부분
    let token = localStorage.getItem("accessToken");
    return axios.get('http://swot.devdogs.kr:8080/api/user/withdraw',
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

function* withdraw() {
    try {
        const result = yield call(withdrawAPI);
        console.log("withdraw의 result" + result);
        if (result.result === "success") {
            yield put({
                type: USER_WITHDRAWAL_SUCCESS,
            });
            localStorage.removeItem('accessToken');
            localStorage.removeItem('myInfo');
            location.href = "/";
        }
    } catch (e) {
        console.error(e);
        yield put({
            type: USER_WITHDRAWAL_FAILURE,
            error: e,
        });
    }

}

function* watchWithdrawal() {
    yield takeEvery(USER_WITHDRAWAL_REQUEST, withdraw);
}




export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchSignUp),
        fork(watchModify),
        fork(watchPwModify),
        fork(watchWithdrawal),
        fork(watchDuplicate)
    ]);
}