import {createAction} from "@reduxjs/toolkit";
import {ICard} from "interface";

type addCard = {
	columnId: number,
	title: string
}

type checkedCard = {
	id: number,
	checked: boolean
}

type deleteCard = {
	id: number
}

export const addCard = createAction<addCard>('ADD_CARD')

export const getCards = createAction('GET_CARDS')

export const checkedCard = createAction<checkedCard>('CHECKED_CARD')

export const deleteCard = createAction<deleteCard>('DELETE_CARD')

export const addCardSuccess = createAction<ICard>('cards/addCard')

export const getCardsSuccess = createAction<Array<ICard>>('cards/getCards')

export const checkedCardSuccess = createAction<number>('cards/checkedCard')

export const deleteCardSuccess = createAction<deleteCard>('cards/deleteCard')

