import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	isLogin: false,
	token: undefined,
	error: ''
}

const authentication = createSlice({
	name: 'authenticationReducer',
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

export default authentication.reducer
export const {signInAction, errorAction} = authentication.actions
