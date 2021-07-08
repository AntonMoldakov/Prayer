import {createSlice} from "@reduxjs/toolkit";
import {changeLoadingModeSuccess} from "./actions";

const initialState = {
	loadingMode: false,
}

const session = createSlice({
	name: 'sessionReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(changeLoadingModeSuccess, (state, action) => {
			state.loadingMode = action.payload.mode
		})
	}
})

export default session.reducer
