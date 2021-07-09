import {takeLatest, put} from 'redux-saga/effects';
import {cardAPI} from "api";
import {PayloadAction} from "@reduxjs/toolkit";
import {deleteCardSuccess} from "../actions";

function* deleteCard(action: PayloadAction<{ id: number }>) {
	try {
		const response = yield cardAPI.deleteCard(action.payload.id)
		if (response.status === 200) {
			yield put(deleteCardSuccess(action.payload))
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onDeleteCard() {
	yield takeLatest('DELETE_CARD', deleteCard);
}


export default onDeleteCard
