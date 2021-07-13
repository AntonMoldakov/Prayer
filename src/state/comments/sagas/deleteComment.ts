import {takeLatest, put, call} from 'redux-saga/effects';
import {commentAPI} from "/api";
import {PayloadAction} from "@reduxjs/toolkit";
import {deleteCommentSuccess} from "../actions";
import {DeleteResponse} from "api/types";

function* deleteComment(action: PayloadAction<{ id: number }>) {
	try {
		const response: DeleteResponse = yield call(commentAPI.deleteComment, action.payload.id)
		if (response.status === 200) {
			yield put(deleteCommentSuccess(action.payload))
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onDeleteComment() {
	yield takeLatest('DELETE_COMMENT', deleteComment);
}


export default onDeleteComment
