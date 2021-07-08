import {takeLatest, put} from 'redux-saga/effects';
import {changeLoadingModeSuccess} from "../actions";

function* stopLoading() {
	try {
		yield put(changeLoadingModeSuccess(false))
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onStopLoading() {
	yield takeLatest('STOP_LOADING', stopLoading);
}

export default onStopLoading
