import {takeLatest, put} from 'redux-saga/effects';
import {columnAPI} from "../../../api";
import {PayloadAction} from "@reduxjs/toolkit";
import {IColumn} from "../../../interface";
import {addColumnSuccess, stopAddColumn} from "../actions";

function* addColumn(action: PayloadAction<{ title: string }>) {
	try {
		const response = yield columnAPI.addColumn(action.payload.title)
		const column: IColumn = response.data
		if (response.status === 201) {
			yield put(addColumnSuccess(column))
			yield put(stopAddColumn())
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onAddColumn() {
	yield takeLatest('ADD_COLUMN', addColumn);
}

export default onAddColumn

