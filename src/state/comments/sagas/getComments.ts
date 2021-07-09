import {takeLatest, put} from 'redux-saga/effects';
import {commentAPI} from "api";
import {IComment} from "interface";
import {getCommentsSuccess} from "../actions";


function* getComments() {
	try {
		const response = yield commentAPI.getComments()
		const comments: IComment[] = response.data
		if (comments) {
			yield put(getCommentsSuccess(comments))
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onGetComments() {
	yield takeLatest('GET_COMMENTS', getComments);
}


export default onGetComments
