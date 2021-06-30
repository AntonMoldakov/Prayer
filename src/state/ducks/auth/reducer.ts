import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	isLogin: false,
	token: undefined
}

const Authentication = createSlice({
	name: 'AuthenticationReducer',
	initialState,
	reducers: {
		signInAction(state, action: { payload: { token: string } }) {
			state.isLogin = !state.isLogin
			state.token = action.payload.token
		}
	}
})

export default Authentication.reducer
export const {signInAction} = Authentication.actions
