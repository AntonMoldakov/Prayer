import {createSlice} from "@reduxjs/toolkit";
import {IColumn} from "interface";
import {addColumnSuccess, changeAddModeSuccess, deleteColumnSuccess, getColumnsSuccess} from "./actions";

interface IInitialState {
	columns: IColumn[],
	addMode: boolean
}

const initialState: IInitialState = {
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
	}
})

export default columns.reducer
