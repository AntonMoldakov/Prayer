import {takeLatest, put} from 'redux-saga/effects';
import {cardAPI} from "../../../api";
import {PayloadAction} from "@reduxjs/toolkit";
import {checkedCardSuccess} from "../actions";

function* checkedCard(action: PayloadAction<{ id: number, checked: boolean }>) {
	try {
		const response = yield cardAPI.checkedCard(action.payload.id, (!action.payload.checked))
		if (response.status === 200) {
			yield put(checkedCardSuccess(action.payload.id))
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onCheckedCard() {
	yield takeLatest('CHECKED_CARD', checkedCard);
}


export default onCheckedCard
