import {createSlice} from "@reduxjs/toolkit";
import {signInSuccess, errorSuccess, isLoadingSuccess} from "./actions";
import {initialStateType} from "./types";

const initialState: initialStateType = {
	isLoading: false,
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
			state.user = action.payload
		})
		builder.addCase(errorSuccess, (state, action) => {
			state.error = action.payload
		})
		builder.addCase(isLoadingSuccess, (state, action) => {
			state.isLoading = action.payload
		})
	}
})

export default authentication.reducer
