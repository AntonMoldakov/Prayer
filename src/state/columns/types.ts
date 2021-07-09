import {IColumn} from "interface";

export type InitialStateTypes = {
	columns: IColumn[],
	addMode: boolean
}

export type addColumn = {
	title: string
}

export type deleteColumn = {
	id: number
}
