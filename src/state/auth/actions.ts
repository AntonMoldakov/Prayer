import {createAction} from "@reduxjs/toolkit";
import {IUser} from "interface";

export const signIn = createAction('SIGN_IN', function prepare(email: string, password: string) {
	return {payload: {email, password}}
})

export const signUp = createAction('SIGN_UP', function prepare(email: string, userName: string, password: string) {
	return {payload: {email, userName, password}}
})

export const clearError = createAction('CLEAR_ERROR')

export const signInSuccess = createAction('auth/signIn', function prepare(user: IUser) {
	return {payload: {user}}
})

export const errorSuccess = createAction('auth/error', function prepare(error: string) {
	return {payload: {error}}
})
