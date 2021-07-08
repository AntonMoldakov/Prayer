import {takeLatest, put} from 'redux-saga/effects';
import {commentAPI} from "/api";
import {PayloadAction} from "@reduxjs/toolkit";
import {deleteCommentSuccess} from "../actions";

function* deleteComment(action: PayloadAction<{ id: number }>) {
	try {
		const response = yield commentAPI.deleteComment(action.payload.id)
		if (response.status === 200) {
			yield put(deleteCommentSuccess(action.payload.id))
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onDeleteComment() {
	yield takeLatest('DELETE_COMMENT', deleteComment);
}


export default onDeleteComment
