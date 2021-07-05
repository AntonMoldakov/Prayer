import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	loadingMode: false,
}

const Session = createSlice({
	name: 'SessionReducer',
	initialState,
	reducers: {
		changeLoadingMode(state, action: { payload: { mode: boolean } }) {
			state.loadingMode = action.payload.mode
		}
	}
})

export default Session.reducer
export const {changeLoadingMode} = Session.actions
