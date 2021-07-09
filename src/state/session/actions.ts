import {createAction} from "@reduxjs/toolkit";

export const startLoading = createAction('START_LOADING')
export const stopLoading = createAction('STOP_LOADING')

export const changeLoadingModeSuccess = createAction<boolean>('session/changeLoadingMode')


