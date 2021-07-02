import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	columns: [
		{id: 120, title: 'Desk1', description: ''},
		{id: 131, title: 'Desk2', description: ''},
		{id: 30, title: 'Desk3', description: ''},
		{id: 34, title: 'Desk4', description: ''}
	]
}

const Columns = createSlice({
	name: 'ColumnsReducer',
	initialState,
	reducers: {
		getColumnsAction(state, action: { payload: { columns: [] } }) {
			state.columns = action.payload.columns
		}
	}
})

export default Columns.reducer
export const {getColumnsAction} = Columns.actions
