import {takeLatest, put, call} from 'redux-saga/effects';
import {commentAPI} from "api";
import {PayloadAction} from "@reduxjs/toolkit";
import {addCommentSuccess} from "../actions";
import {PostCommentResponse} from "api/types";

function* addComment(action: PayloadAction<{ cardId: number, body: string, name: string }>) {
	try {
		const response: PostCommentResponse = yield call(commentAPI.addComment, action.payload.cardId, action.payload.body, action.payload.name)
		const comment = response.data
		if (response.status === 201) {
			yield put(addCommentSuccess(comment))
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onAddComment() {
	yield takeLatest('ADD_COMMENT', addComment);
}

export default onAddComment

