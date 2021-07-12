import {takeLatest, put} from 'redux-saga/effects';
import {commentAPI} from "api";
import {IComment} from "interface";
import {getCommentsSuccess, isLoadingSuccess} from "../actions";


function* getComments() {
	try {
		yield put(isLoadingSuccess(true))
		const response = yield commentAPI.getComments()
		const comments: IComment[] = response.data
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
