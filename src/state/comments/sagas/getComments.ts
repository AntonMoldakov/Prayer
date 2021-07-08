import {takeLatest, put} from 'redux-saga/effects';
import {startLoading, stopLoading} from "../../session/actions";
import {commentAPI} from "../../../api";
import {IComment} from "../../../interface";
import {getCommentsSuccess} from "../actions";


function* getComments() {
	try {
		yield put(startLoading())
		const response = yield commentAPI.getComments()
		const comments: IComment[] = response.data
		if (comments) {
			yield put(getCommentsSuccess(comments))
			yield put(stopLoading())
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onGetComments() {
	yield takeLatest('GET_COMMENTS', getComments);
}


export default onGetComments
