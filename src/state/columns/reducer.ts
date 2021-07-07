import {createSlice} from "@reduxjs/toolkit";
import {IColumn} from "../../interface";

const initialState = {
	addMode: false,
	columns: [
		{id: 120, title: 'Desk1', description: ''},
		{id: 131, title: 'Desk2', description: ''},
		{id: 30, title: 'Desk3', description: ''},
		{id: 34, title: 'Desk4', description: ''}
	]
}

const columns = createSlice({
	name: 'columnsReducer',
	initialState,
	reducers: {
		getColumnsAction(state, action: { payload: { columns: IColumn[] } }) {
			state.columns = action.payload.columns
		},
		addColumnAction(state, action: { payload: { column: IColumn } }) {
			state.columns.push(action.payload.column)
		},
		changeAddMode(state, action: { payload: { mode: boolean } }) {
			state.addMode = action.payload.mode
		},
		deleteColumnAction(state, action: { payload: { id: number } }) {
			state.columns = state.columns.filter(column => column.id !== action.payload.id)
		}
	}
})

export default columns.reducer
export const {getColumnsAction, addColumnAction, changeAddMode, deleteColumnAction} = columns.actions
