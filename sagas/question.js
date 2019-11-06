// import {
//     all,
//     delay,
//     fork,
//     put,
//     takeEvery,
//     call
// } from 'redux-saga/effects';

// import {
//     LOAD_QUESTION_REQUEST,
//     LOAD_QUESTION_SUCCESS,
//     LOAD_QUESTION_FAILURE,
//     CREATE_QUESTION_REQUEST,
//     CREATE_QUESTION_SUCCESS,
//     CREATE_QUESTION_FAILURE,
//     DELETE_QUESTION_REQUEST,
//     DELETE_QUESTION_SUCCESS,
//     DELETE_QUESTION_FAILURE,
//     MODIFY_QUESTION_REQUEST,
//     MODIFY_QUESTION_SUCCESS,
//     MODIFY_QUESTION_FAILURE,

// } from '../reducers/question';

// import axios from 'axios';

// // Q&A 글 불러오기 

// function loadQuestionAPI() {

//     return axios.get('http://swot.devdogs.kr:8080/api/auth/board/3/list'
//     ).then(response => {
//         console.log('response : ', JSON.stringify(response, null, 2))
//         var result = response.data;
//         return result;
//     })
//         .catch(error => {
//             console.log('failed', error)
//             return error;
//         });
// }

// function* loadQuestion() {
//     try {
//         const result = yield call(loadQuestionAPI);

//         if (result.result === "success") {
//             yield put({
//                 type: LOAD_QUESTION_SUCCESS,
//                 data: result.info,
//             });
//         } else {
//             yield put({
//                 type: LOAD_QUESTION_FAILURE,
//             });
//         }
//     }
//     catch (e) {
//         yield put({
//             type: LOAD_QUESTION_FAILURE,
//             error: e,
//         });
//     }
// }

// function* watchLoadQuestion() {
//     yield takeEvery(LOAD_QUESTION_REQUEST, loadQuestion);
// }

// // Q&A 글 작성

// function createQuestionAPI(createQuestionInfo) {

//     let form = new FormData();
//     form.append('code', createQuestionInfo.code)
//     form.append('title', createQuestionInfo.title)
//     form.append('body', createQuestionInfo.body)

//     console.log(createQuestionInfo.title);

//     let token = localStorage.getItem("accessToken");

//     return axios.post('http://swot.devdogs.kr:8080/api/board/create', form,
//         {
//             headers: { // 요청 헤더
//                 Authorization: token,
//             },
//         }
//     ).then(response => {
//         console.log('response : ', JSON.stringify(response, null, 2))
//         var result = response.data;
//         return result;
//     })
//         .catch(error => {
//             console.log('failed', error)
//             return error;
//         });
// }

// function* createQuestion(action) {
//     try {
//         const result = yield call(createQuestionAPI, action.data);

//         if (result.result === "success") {
//             yield put({
//                 type: CREATE_QUESTION_SUCCESS,
//                 data: result.info,
//             });
//             alert('Q&A 글이 작성되었습니다.')
//         } else {
//             yield put({
//                 type: CREATE_QUESTION_FAILURE,
//             });
//             alert('Q&A 글 작성 실패.')
//         }
//     }
//     catch (e) {
//         yield put({
//             type: CREATE_QUESTION_FAILURE,
//             error: e,
//         });
//         alert('통신 오류')
//     }
// }

// function* watchCreateQuestion() {
//     yield takeEvery(CREATE_QUESTION_REQUEST, createQuestion);
// }


// // Q&A 글 삭제

// function deleteQuestionAPI(deleteQuestionInfo) {

//     let id = deleteQuestionInfo.id

//     let token = localStorage.getItem("accessToken");

//     return axios.get('http://swot.devdogs.kr:8080/api/board/delete/' + id,
//         {
//             headers: { // 요청 헤더
//                 Authorization: token,
//             },
//         }
//     ).then(response => {
//         console.log('response : ', JSON.stringify(response, null, 2))
//         var result = response.data;
//         return result;
//     })
//         .catch(error => {
//             console.log('failed', error)
//             return error;
//         });
// }

// function* deleteQuestion(action) {
//     try {
//         const result = yield call(deleteQuestionAPI, action.data);

//         if (result.result === "success") {
//             yield put({
//                 type: DELETE_QUESTION_SUCCESS,
//                 data: result.info,
//             });
//             yield put({
//                 type: LOAD_QUESTION_REQUEST,
//             })
//             alert('Q&A 글이 삭제되었습니다.')
//         } else {
//             yield put({
//                 type: DELETE_QUESTION_FAILURE,
//             });
//             alert('Q&A 글 삭제 실패.')
//         }
//     }
//     catch (e) {
//         yield put({
//             type: DELETE_QUESTION_FAILURE,
//             error: e,
//         });
//         alert('통신 오류')
//     }
// }

// function* watchDeleteQuestion() {
//     yield takeEvery(DELETE_QUESTION_REQUEST, deleteQuestion);
// }


// // Q&A 글 수정

// function modifyQuestionAPI(modifyQuestionInfo) {


//     let id = modifyQuestionInfo.id;

//     let form = new FormData();
//     form.append('title', modifyQuestionInfo.title)
//     form.append('body', modifyQuestionInfo.body)

//     let token = localStorage.getItem("accessToken");

//     return axios.post('http://swot.devdogs.kr:8080/api/board/modify/' + id, form,
//         {
//             headers: { // 요청 헤더
//                 Authorization: token,
//             },
//         }
//     ).then(response => {
//         console.log('response : ', JSON.stringify(response, null, 2))
//         var result = response.data;
//         return result;
//     })
//         .catch(error => {
//             console.log('failed', error)
//             return error;
//         });
// }

// function* modifyQuestion(action) {
//     try {
//         const result = yield call(modifyQuestionAPI, action.data);

//         if (result.result === "success") {
//             yield put({
//                 type: MODIFY_QUESTION_SUCCESS
//             });
//             yield put({
//                 type: LOAD_QUESTION_REQUEST
//             });
//             alert('Q&A 글이 수정되었습니다.')
//         } else {
//             yield put({
//                 type: MODIFY_QUESTION_FAILURE,
//             });
//             alert('Q&A 글 수정 실패.')
//         }
//     }
//     catch (e) {
//         yield put({
//             type: MODIFY_QUESTION_FAILURE,
//             error: e,
//         });
//         alert('통신 오류')
//     }
// }

// function* watchModifyQuestion() {
//     yield takeEvery(MODIFY_QUESTION_REQUEST, modifyQuestion);
// }

// export default function* questionSaga() {
//     yield all([
//         fork(watchLoadQuestion),
//         fork(watchCreateQuestion),
//         fork(watchDeleteQuestion),
//         fork(watchModifyQuestion)
//     ]);
// }