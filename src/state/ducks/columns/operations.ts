import {Dispatch} from "redux"
import {getColumnsAction, addColumnAction, changeAddMode, deleteColumnAction} from "./reducer"
import {columnAPI} from "../../../api"
import {IColumn} from "../../../interface";
import {sessionOperations} from "../session";

const getColumns = () => async (dispatch: Dispatch) => {
	// @ts-ignore
	dispatch(sessionOperations.startLoading())
	const response = await columnAPI.getColumns()
	let columns: IColumn[] = response.data
	if (columns) {
		dispatch(getColumnsAction({columns}))
		// @ts-ignore
		dispatch(sessionOperations.stopLoading())
	}
}

const addColumn = (title: string) => async (dispatch: Dispatch) => {
	const response = await columnAPI.addColumn(title)
	let column: IColumn = response.data
	if (response.status === 201) {
		dispatch(addColumnAction({column}))
		dispatch(changeAddMode({mode: false}))
	}
}

const deleteColumn = (id: number) => async (dispatch: Dispatch) => {
	const response = await columnAPI.deleteColumn(id)
	if (response.status === 200) {
		dispatch(deleteColumnAction({id}))
	}
}

const startAddColumn = () => (dispatch: Dispatch) => {
	dispatch(changeAddMode({mode: true}))
}


const stopAddColumn = () => (dispatch: Dispatch) => {
	dispatch(changeAddMode({mode: false}))
}


const operations = {getColumns, addColumn, deleteColumn, startAddColumn, stopAddColumn}

export default operations
