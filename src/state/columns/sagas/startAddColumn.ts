import {takeLatest, put} from 'redux-saga/effects';
import {changeAddModeSuccess} from "../actions";

function* startAddColumn() {
	try {
		yield put(changeAddModeSuccess(true))
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onStartAddColumn() {
	yield takeLatest('START_ADD_COLUMN', startAddColumn);
}

export default onStartAddColumn
