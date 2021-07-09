import {takeLatest, put} from 'redux-saga/effects';
import {columnAPI} from "api";
import {PayloadAction} from "@reduxjs/toolkit";
import {deleteColumnSuccess} from "../actions";

function* deleteColumn(action: PayloadAction<{ id: number }>) {
	try {
		const response = yield columnAPI.deleteColumn(action.payload.id)
		if (response.status === 200) {
			yield put(deleteColumnSuccess(action.payload))
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onDeleteColumn() {
	yield takeLatest('DELETE_COLUMN', deleteColumn);
}


export default onDeleteColumn
