import {takeLatest, put} from 'redux-saga/effects';
import {isLoadingSuccess, signOutSuccess} from "../actions";

function* signOut() {
	try {
		yield put(isLoadingSuccess(true))
		yield put(signOutSuccess())
	} catch (error) {
		yield console.log(error.message);
	} finally {
		yield put(isLoadingSuccess(false))
	}
}

function* onSignOut() {
	yield takeLatest('SIGN_OUT', signOut);
}

export default onSignOut
