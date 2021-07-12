import {ICard} from "interface";

export type InitialStateTypes = {
	isLoading: boolean,
	cards: ICard[]
}

export type addCard = {
	columnId: number,
	title: string
}

export type checkedCard = {
	id: number,
	checked: boolean
}

export type deleteCard = {
	id: number
}
