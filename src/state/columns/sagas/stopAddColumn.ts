import {takeLatest, put} from 'redux-saga/effects';
import {changeAddModeSuccess} from "../actions";

function* stopAddColumn() {
	try {
		yield put(changeAddModeSuccess(false))
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onStopAddColumn() {
	yield takeLatest('STOP_ADD_COLUMN', stopAddColumn);
}

export default onStopAddColumn
