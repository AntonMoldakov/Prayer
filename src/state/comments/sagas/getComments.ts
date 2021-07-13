import {takeLatest, put, call} from 'redux-saga/effects';
import {commentAPI} from "api";
import {getCommentsSuccess, isLoadingSuccess} from "../actions";
import {GetCommentsResponse} from "api/types";


function* getComments() {
	try {
		yield put(isLoadingSuccess(true))
		const response: GetCommentsResponse = yield call(commentAPI.getComments)
		const comments = response.data
		if (comments) {
			yield put(getCommentsSuccess(comments))
		}
	} catch (error) {
		yield console.log(error.message);
	} finally {
		yield put(isLoadingSuccess(false))
	}
}

function* onGetComments() {
	yield takeLatest('GET_COMMENTS', getComments);
}


export default onGetComments
