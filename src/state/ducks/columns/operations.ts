import {Dispatch} from "redux"
import {getColumnsAction} from "./reducer"
import {columnAPI} from "../../../api"

const getColumns = () => async (dispatch: Dispatch) => {
	const response = await columnAPI.getColumns()
	let columns: [] = response.data
	if (columns)
		console.log(response)
	dispatch(getColumnsAction({columns}))
}

const addColumn = (title: string) => async (dispatch: Dispatch) => {
	// const response = await columnAPI.addColumn(title)
	// if (response)
		// dispatch(addColumnAction({columns}))
}


const operations = {getColumns}

export default operations
