import {takeLatest, put} from 'redux-saga/effects';
import {authAPI} from "api";
import {PayloadAction} from "@reduxjs/toolkit";
import {signInSuccess, errorSuccess} from "../actions";

function* signIn(action: PayloadAction<{ email: string; password: string }>) {
	try {
		const response = yield authAPI.signIn(action.payload.email, action.payload.password)
		if (response.data.message) {
			yield put(errorSuccess('incorrect email or password'))
		} else {
			yield put(signInSuccess(response.data));
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onSignIn() {
	yield takeLatest('SIGN_IN', signIn);
}

export default onSignIn
