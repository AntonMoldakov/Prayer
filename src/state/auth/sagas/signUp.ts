import {takeLatest, put} from 'redux-saga/effects';
import {authAPI} from "api";
import {PayloadAction} from "@reduxjs/toolkit";
import {signInSuccess, errorSuccess} from "../actions";

function* signUp(action: PayloadAction<{ email: string, userName: string, password: string }>) {
	try {
		const response = yield authAPI.signUp(action.payload.email, action.payload.userName, action.payload.password)
		if (response.data.message) {
			yield put(errorSuccess('Email is already in use'))
		} else {
			yield put(signInSuccess(response.data));
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onSignUp() {
	yield takeLatest('SIGN_UP', signUp);
}

export default onSignUp
