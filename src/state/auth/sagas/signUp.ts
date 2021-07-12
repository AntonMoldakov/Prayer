import {takeLatest, put} from 'redux-saga/effects';
import {authAPI} from "api";
import {PayloadAction} from "@reduxjs/toolkit";
import {signInSuccess, errorSuccess, isLoadingSuccess} from "../actions";

function* signUp(action: PayloadAction<{ email: string, name: string, password: string }>) {
	try {
		yield put(isLoadingSuccess(true))
		const response = yield authAPI.signUp(action.payload.email.toLowerCase(), action.payload.name, action.payload.password)
		if (response.data.message) {
			yield put(errorSuccess('Email is already in use'))
		} else {
			yield put(signInSuccess(response.data));
		}
	} catch (error) {
		yield console.log(error.message);
	} finally {
		yield put(isLoadingSuccess(false))
	}
}

function* onSignUp() {
	yield takeLatest('SIGN_UP', signUp);
}

export default onSignUp
