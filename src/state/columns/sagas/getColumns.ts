import {takeLatest, put, call} from 'redux-saga/effects';
import {columnAPI} from "api";
import {IColumn} from "interface";
import {getColumnsSuccess, isLoadingSuccess} from "../actions";
import {GetColumnsResponse} from "api/types";


function* getColumns() {
	try {
		yield put(isLoadingSuccess(true))
		const response: GetColumnsResponse = yield call(columnAPI.getColumns)
		const columns: IColumn[] = response.data
		if (columns) {
			yield put(getColumnsSuccess(columns))
		}
	} catch (error) {
		yield console.log(error.message);
	} finally {
		yield put(isLoadingSuccess(false))
	}
}

function* onGetColumns() {
	yield takeLatest('GET_COLUMNS', getColumns);
}


export default onGetColumns
