import {takeLatest, put} from 'redux-saga/effects';
import {errorSuccess} from "../actions";


function* clearError() {
			yield put(errorSuccess(''))
}

function* onClearError() {
	yield takeLatest('CLEAR_ERROR', clearError);
}

export default onClearError
