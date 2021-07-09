import {createAction} from "@reduxjs/toolkit";
import {IColumn} from "interface";

type addColumn = {
	title: string
}

type deleteColumn = {
	id: number
}

export const addColumn = createAction<addColumn>('ADD_COLUMN')

export const getColumns = createAction('GET_COLUMNS')

export const startAddColumn = createAction('START_ADD_COLUMN')

export const stopAddColumn = createAction('STOP_ADD_COLUMN')


export const deleteColumn = createAction<deleteColumn>('DELETE_COLUMN')


export const addColumnSuccess = createAction<IColumn>('columns/addColumn')

export const getColumnsSuccess = createAction<Array<IColumn>>('columns/getColumns')

export const changeAddModeSuccess = createAction<boolean>('columns/changeAddMode')

export const deleteColumnSuccess = createAction<deleteColumn>('columns/deleteColumn')


