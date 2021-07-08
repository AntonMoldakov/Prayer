import {createAction} from "@reduxjs/toolkit";
import {IColumn} from "../../interface";

export const addColumn = createAction('ADD_COLUMN', function prepare(title: string) {
	return {payload: {title}}
})

export const getColumns = createAction('GET_COLUMNS')

export const startAddColumn = createAction('START_ADD_COLUMN')

export const stopAddColumn = createAction('STOP_ADD_COLUMN')


export const deleteColumn = createAction('DELETE_COLUMN', function prepare(id: number) {
	return {payload: {id}}
})


export const addColumnSuccess = createAction('columns/addColumn', function prepare(column: IColumn) {
	return {payload: {column}}
})

export const getColumnsSuccess = createAction('columns/getColumns', function prepare(columns: IColumn[]) {
	return {payload: {columns}}
})

export const changeAddModeSuccess = createAction('columns/changeAddMode', function prepare(mode: boolean) {
	return {payload: {mode}}
})

export const deleteColumnSuccess = createAction('columns/deleteColumn', function prepare(id: number) {
	return {payload: {id}}
})


