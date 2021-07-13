import {takeLatest, put, call} from 'redux-saga/effects';
import {authAPI} from "api";
import {PayloadAction} from "@reduxjs/toolkit";
import {signInSuccess, errorSuccess, isLoadingSuccess} from "../actions";
import {AuthResponse} from "api/types";

function* signIn(action: PayloadAction<{ email: string; password: string }>) {
	try {
		yield put(isLoadingSuccess(true))
		const response: AuthResponse = yield call(authAPI.signIn, action.payload.email.toLowerCase(), action.payload.password)
		if (!response.data.token) {
			yield put(errorSuccess('incorrect email or password'))
		} else {
			yield put(signInSuccess(response.data));
		}
	} catch (error) {
		yield console.log(error.message);
	} finally {
		yield put(isLoadingSuccess(false))
	}
}

function* onSignIn() {
	yield takeLatest('SIGN_IN', signIn);
}

export default onSignIn
