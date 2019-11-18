import {
    all,
    delay,
    fork,
    put,
    takeEvery,
    call
} from 'redux-saga/effects';
import {
    LOAD_POST_REQUEST,
    LOAD_POST_1_SUCCESS,
    LOAD_POST_2_SUCCESS,
    LOAD_POST_3_SUCCESS,
    LOAD_POST_FAILURE,
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    MODIFY_POST_REQUEST,
    MODIFY_POST_SUCCESS,
    MODIFY_POST_FAILURE,
    LOAD_MYSTUDYPOST_REQUEST,
    LOAD_MYSTUDYPOST_SUCCESS,
    LOAD_MYSTUDYPOST_FAILURE
} from '../reducers/post';
import axios from 'axios';

// 글 불러오기 
function loadPostAPI(postCode) {

    let code = postCode.code;
    console.log(code);

    return axios.get('http://swot.devdogs.kr:8080/api/auth/board/' + code + '/list'
    ).then(response => {
        //console.log('response : ', JSON.stringify(response, null, 2))
        var info = response.data;
        var result = {
            info,
            code,
        }
        return result;
    })
        .catch(error => {
            console.log('failed', error)
            return error;
        });
}

function* loadPost(action) {
    try {
        const result = yield call(loadPostAPI, action.data);
        if (result.info.result === "success") {
            switch(result.code){
                case "1":
                    yield put({
                        type: LOAD_POST_1_SUCCESS,
                        data: result.info.info,
                    });
                    break;
                case "2":
                    yield put({
                        type: LOAD_POST_2_SUCCESS,
                        data: result.info.info,
                    });
                    break;
                case "3":
                    yield put({
                        type: LOAD_POST_3_SUCCESS,
                        data: result.info.info,
                    });
                    break;
            }


        } else {
            yield put({
                type: LOAD_POST_FAILURE,
            });
        }
    }
    catch (e) {
        yield put({
            type: LOAD_POST_FAILURE,
            error: e,
        });
    }
}

function* watchLoadPost() {
    yield takeEvery(LOAD_POST_REQUEST, loadPost)
}

// 내가 작성한 스터디 글 불러오기 
function loadMystudyPostAPI() {

    let token = localStorage.getItem("accessToken");

    return axios.get('http://swot.devdogs.kr:8080/api/board/myBoards', {
        headers: {
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

function* loadMystudyPost() {
    try {
        const result = yield call(loadMystudyPostAPI);

        if (result.result === "success") {
            yield put({
                type: LOAD_MYSTUDYPOST_SUCCESS,
                data: result.info,
            });
        } else {
            yield put({
                type: LOAD_MYSTUDYPOST_FAILURE,
            });
        }
    }
    catch (e) {
        yield put({
            type: LOAD_MYSTUDYPOST_FAILURE,
            error: e,
        });
    }
}

function* watchLoadMystudyPost() {
    yield takeEvery(LOAD_MYSTUDYPOST_REQUEST, loadMystudyPost)
}


// 글 작성
function createPostAPI(postInfo) {

    console.log(postInfo);
    let form = new FormData()
    form.append('code', postInfo.code)
    form.append('title', postInfo.title)
    form.append('body', postInfo.body)
    form.append('startTime', postInfo.startTime)
    form.append('endTime', postInfo.endTime)
    form.append('meetingDate', postInfo.meetingDate)
    form.append('total', postInfo.total)


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

function* createPost(action) {
    try {
        const result = yield call(createPostAPI, action.data);

        if (result.result === "success") {
            yield put({
                type: CREATE_POST_SUCCESS,
                data: result.info,
            });
            alert('글이 작성되었습니다.');
        } else {
            yield put({
                type: CREATE_POST_FAILURE,
            });
            alert("글 작성 X");
        }
    }
    catch (e) {
        yield put({
            type: CREATE_POST_FAILURE,
            error: e,
        });
        alert('통신 오류 실패.');
    }
}

function* watchCreatePost() {
    yield takeEvery(CREATE_POST_REQUEST, createPost);
}

// 글 삭제

function deletePostAPI(postInfo) {

    let id = postInfo.id

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

function* deletePost(action) {
    try {
        const result = yield call(deletePostAPI, action.data);

        if (result.result === "success") {
            yield put({
                type: DELETE_POST_SUCCESS,
            });
            yield put({
                type: LOAD_POST_REQUEST,
                data: {
                    code: result.info
                }
            })
            alert('글이 삭제되었습니다.');
        } else {
            yield put({
                type: DELETE_POST_FAILURE,
            });
            alert("글 삭제 X");
        }
    }
    catch (e) {
        yield put({
            type: DELETE_POST_FAILURE,
            error: e,
        });
        alert('통신 오류 실패.');
    }
}

function* watchDeletePost() {
    yield takeEvery(DELETE_POST_REQUEST, deletePost);
}


// 글 수정
function modifyPostAPI(postInfo) {

    let id = postInfo.id

    let form = new FormData()
    form.append('title', postInfo.title)
    form.append('body', postInfo.body)

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

function* modifyPost(action) {
    try {
        const result = yield call(modifyPostAPI, action.data);

        console.log(result.result);

        if (result.result === "success") {
            yield put({
                type: MODIFY_POST_SUCCESS,
            });
            yield put({
                type: LOAD_POST_REQUEST,
                data: {
                    code: result.info.code
                }
            })
            alert('글이 수정되었습니다.');
        } else {
            yield put({
                type: MODIFY_POST_FAILURE,
            });
            alert("글 수정 X");
        }
    }
    catch (e) {
        yield put({
            type: MODIFY_POST_FAILURE,
            error: e,
        });
        alert('통신 오류 실패.');
    }
}

function* watchModifyPost() {
    yield takeEvery(MODIFY_POST_REQUEST, modifyPost);
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
        fork(watchLoadPost),
        // fork(watchLoadStudyboards),
        fork(watchCreatePost),
        fork(watchDeletePost),
        fork(watchModifyPost),
        fork(watchLoadMystudyPost)
    ]);
}   