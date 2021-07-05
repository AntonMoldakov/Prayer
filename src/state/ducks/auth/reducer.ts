import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	isLogin: false,
	token: undefined,
	error: ''
}

const Authentication = createSlice({
	name: 'AuthenticationReducer',
	initialState,
	reducers: {
		signInAction(state, action: { payload: { token: string } }) {
			state.isLogin = !state.isLogin
			state.token = action.payload.token
		},
		errorAction(state, action: { payload: {error: string}}) {
			state.error = action.payload.error
		}
	}
})

export default Authentication.reducer
export const {signInAction, errorAction} = Authentication.actions
