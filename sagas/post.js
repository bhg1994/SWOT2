import {
    all,
    delay,
    fork,
    put,
    takeLatest,
    call
} from 'redux-saga/effects';
import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    LOAD_NOTIFYCATIONS_REQUEST,
  LOAD_NOTIFYCATIONS_SUCCESS ,
  LOAD_NOTIFYCATIONS_FAILURE ,

  LOAD_STUDYBOARDS_REQUEST,
  LOAD_STUDYBOARDS_SUCCESS ,
  LOAD_STUDYBOARDS_FAILURE ,
} from '../reducers/post';

function addPostAPI() {

}

function* addPost() {
    try {
        yield delay(2000);
        yield put({
            type: ADD_POST_SUCCESS,
        });
    } catch (e) {
        yield put({
            type: ADD_POST_FAILURE,
            error: e,
        });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function addCommentAPI() {

}

function* addComment(action) {
    try {
        yield delay(2000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId,
            },
        });
    } catch (e) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e,
        });
    }
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function loadNotifycationsAPI(requestData) {
    const data = [
        {
          key: "1",
          number: "1",
          title: "SWOT[안내] 홈페이지 점검 안내 공지 2018.09.21(토) 09:00 ~ 11:11",
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

function* loadNotifycations(action) {
    try {
        const result = yield call(loadNotifycationsAPI, action.data);
        yield delay(2000);
        yield put({
            type: LOAD_NOTIFYCATIONS_SUCCESS,
            data: result,
        });
    } catch (e) {
        yield put({
            type: LOAD_NOTIFYCATIONS_FAILURE,
            error: e,
        });
    }
}

function* watchLoadNotifycations() {
    yield takeLatest(LOAD_NOTIFYCATIONS_REQUEST, loadNotifycations);
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
    yield takeLatest(LOAD_STUDYBOARDS_REQUEST, loadStudyboards);
}



export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchLoadNotifycations),
        fork(watchLoadStudyboards)
    ]);
}