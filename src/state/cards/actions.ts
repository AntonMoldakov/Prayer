import {createAction} from "@reduxjs/toolkit";
import {ICard} from "interface";
import * as types from './types'

export const addCard = createAction<types.addCard>('ADD_CARD')

export const getCards = createAction('GET_CARDS')

export const checkedCard = createAction<types.checkedCard>('CHECKED_CARD')

export const deleteCard = createAction<types.deleteCard>('DELETE_CARD')

export const addCardSuccess = createAction<ICard>('cards/addCard')

export const getCardsSuccess = createAction<Array<ICard>>('cards/getCards')

export const checkedCardSuccess = createAction<number>('cards/checkedCard')

export const deleteCardSuccess = createAction<types.deleteCard>('cards/deleteCard')

