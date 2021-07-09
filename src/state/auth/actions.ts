import {createAction} from "@reduxjs/toolkit";
import {IUser} from "interface";
import * as types from './types'

export const signIn = createAction<types.signIn>('SIGN_IN')

export const signUp = createAction<types.signUp>('SIGN_UP')

export const clearError = createAction('CLEAR_ERROR')

export const signInSuccess = createAction<IUser>('auth/signIn')

export const errorSuccess = createAction<types.error>('auth/error')
