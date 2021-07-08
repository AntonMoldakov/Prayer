import {takeLatest, put} from 'redux-saga/effects';
import {changeLoadingModeSuccess} from "../actions";

function* startLoading() {
	try {
		yield put(changeLoadingModeSuccess(true))
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onStartLoading() {
	yield takeLatest('START_LOADING', startLoading);
}

export default onStartLoading
