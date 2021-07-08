import {createAction} from "@reduxjs/toolkit";
import {ICard} from "../../interface";

export const addCard = createAction('ADD_CARD', function prepare(columnId: number, title: string) {
	return {payload: {columnId, title}}
})

export const getCards = createAction('GET_CARDS')

export const checkedCard = createAction('CHECKED_CARD', function prepare(id: number, checked: boolean) {
	return {payload: {id, checked}}
})

export const deleteCard = createAction('DELETE_CARD', function prepare(id: number) {
	return {payload: {id}}
})

export const addCardSuccess = createAction('cards/addCard', function prepare(card: ICard) {
	return {payload: {card}}
})

export const getCardsSuccess = createAction('cards/getCards', function prepare(cards: ICard[]) {
	return {payload: {cards}}
})

export const checkedCardSuccess = createAction('cards/checkedCard', function prepare(id: number) {
	return {payload: {id}}
})

export const deleteCardSuccess = createAction('cards/deleteCard', function prepare(id: number) {
	return {payload: {id}}
})

