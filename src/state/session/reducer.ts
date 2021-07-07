import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	loadingMode: false,
}

const session = createSlice({
	name: 'sessionReducer',
	initialState,
	reducers: {
		changeLoadingMode(state, action: { payload: { mode: boolean } }) {
			state.loadingMode = action.payload.mode
		}
	}
})

export default session.reducer
export const {changeLoadingMode} = session.actions
