import {createSlice} from "@reduxjs/toolkit";
import {
	addColumnSuccess,
	changeAddModeSuccess,
	deleteColumnSuccess,
	getColumnsSuccess,
	isLoadingSuccess
} from "./actions";
import {InitialStateTypes} from "./types";


const initialState: InitialStateTypes = {
	isLoading: false,
	addMode: false,
	columns: []
}

const columns = createSlice({
	name: 'columnsReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getColumnsSuccess, (state, action) => {
			state.columns = action.payload
		})
		builder.addCase(addColumnSuccess, (state, action) => {
			state.columns.push(action.payload)
		})
		builder.addCase(changeAddModeSuccess, (state, action) => {
			state.addMode = action.payload
		})
		builder.addCase(deleteColumnSuccess, (state, action) => {
			state.columns = state.columns.filter(column => column.id !== action.payload.id)
		})
		builder.addCase(isLoadingSuccess, (state, action) => {
			state.isLoading = action.payload
		})
	}
})

export default columns.reducer
