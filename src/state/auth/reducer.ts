import {createSlice} from "@reduxjs/toolkit";
import {signInSuccess, errorSuccess} from "./actions";

const initialState = {
	isLogin: false,
	token: undefined,
	error: ''
}

const authentication = createSlice({
	name: 'authenticationReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(signInSuccess, (state, action) => {
			state.isLogin = !state.isLogin
			state.token = action.payload.token
		})
		builder.addCase(errorSuccess, (state, action) => {
			state.error = action.payload.error
		})
	}
})

export default authentication.reducer
