import {takeLatest, put} from 'redux-saga/effects';
import {columnAPI} from "api";
import {IColumn} from "interface";
import {getColumnsSuccess, isLoadingSuccess} from "../actions";


function* getColumns() {
	try {
		yield put(isLoadingSuccess(true))
		const response = yield columnAPI.getColumns()
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
