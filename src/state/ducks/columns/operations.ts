import {Dispatch} from "redux"
import {getColumnsAction, addColumnAction, changeAddMode} from "./reducer"
import {columnAPI} from "../../../api"
import {IColumn} from "../../../interface";

const getColumns = () => async (dispatch: Dispatch) => {
	const response = await columnAPI.getColumns()
	let columns: IColumn[] = response.data
	if (columns)
		console.log(response)
	dispatch(getColumnsAction({columns}))
}

const addColumn = (title: string) => async (dispatch: Dispatch) => {
	const response = await columnAPI.addColumn(title)
	let column: IColumn = response.data
	console.log(column);
	if (response) {
		dispatch(addColumnAction({column}))
		dispatch(changeAddMode({mode: false}))
	}
}

const startAddColumn = () => (dispatch: Dispatch) => {
	dispatch(changeAddMode({mode: true}))
}

const stopAddColumn = () => (dispatch: Dispatch) => {
	dispatch(changeAddMode({mode: false}))
}


const operations = {getColumns, addColumn, startAddColumn, stopAddColumn}

export default operations
