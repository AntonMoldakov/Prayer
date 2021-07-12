import {createAction} from "@reduxjs/toolkit";
import {IColumn} from "interface";
import * as types from "./types";

export const addColumn = createAction<types.addColumn>('ADD_COLUMN')

export const getColumns = createAction('GET_COLUMNS')

export const startAddColumn = createAction('START_ADD_COLUMN')

export const stopAddColumn = createAction('STOP_ADD_COLUMN')


export const deleteColumn = createAction<types.deleteColumn>('DELETE_COLUMN')


export const addColumnSuccess = createAction<IColumn>('columns/addColumn')

export const getColumnsSuccess = createAction<Array<IColumn>>('columns/getColumns')

export const changeAddModeSuccess = createAction<boolean>('columns/changeAddMode')

export const isLoadingSuccess = createAction<boolean>('columns/isLoading')

export const deleteColumnSuccess = createAction<types.deleteColumn>('columns/deleteColumn')


