import {createAction} from "@reduxjs/toolkit";
import {IUser} from "interface";

type signIn = {
	email: string,
	password: string
}

type signUp = {
	name: string,
} & signIn

type error = string


export const signIn = createAction<signIn>('SIGN_IN')

export const signUp = createAction<signUp>('SIGN_UP')

export const clearError = createAction('CLEAR_ERROR')

export const signInSuccess = createAction<IUser>('auth/signIn')

export const errorSuccess = createAction<error>('auth/error')
