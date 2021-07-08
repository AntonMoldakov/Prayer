import {takeLatest, put} from 'redux-saga/effects';
import {commentAPI} from "../../../api";
import {PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../../interface";
import {addCommentSuccess} from "../actions";

function* addComment(action: PayloadAction<{ cardId: number, body: string }>) {
	try {
		const response = yield commentAPI.addComment(action.payload.cardId, action.payload.body)
		const comment: IComment = response.data
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

