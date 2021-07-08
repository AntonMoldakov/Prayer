import {createSlice} from "@reduxjs/toolkit";
import {signInSuccess, errorSuccess} from "./actions";

const initialState = {
	isLogin: false,
	error: '',
	user: {
		token: '',
		name: '',
		email: '',
		password: ''
	}
}

const authentication = createSlice({
	name: 'authenticationReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(signInSuccess, (state, action) => {
			state.isLogin = !state.isLogin
			state.user = action.payload.user
		})
		builder.addCase(errorSuccess, (state, action) => {
			state.error = action.payload.error
		})
	}
})

export default authentication.reducer
