import {takeLatest, put, call} from 'redux-saga/effects';
import {columnAPI} from "api";
import {PayloadAction} from "@reduxjs/toolkit";
import {addColumnSuccess, stopAddColumn} from "../actions";
import {PostColumnResponse} from "api/types";

function* addColumn(action: PayloadAction<{ title: string }>) {
	try {
		const response: PostColumnResponse = yield call(columnAPI.addColumn, action.payload.title)
		const column = response.data
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

