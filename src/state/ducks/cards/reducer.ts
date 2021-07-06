import {createSlice} from "@reduxjs/toolkit";
import {ICard} from "../../../interface";

const initialState = {
	cards: [
		{id: 34, title: 'Prayer 1', description: ''}
	]
}

const Cards = createSlice({
	name: 'CardsReducer',
	initialState,
	reducers: {
		getCardsAction(state, action: { payload: { cards: ICard[] } }) {
			state.cards = action.payload.cards
		},
		addCardAction(state, action: { payload: { card: ICard } }) {
			state.cards.push(action.payload.card)
		},
		deleteCardAction(state, action: { payload: { id: number } }) {
			state.cards = state.cards.filter(card => card.id !== action.payload.id)
		}
	}
})

export default Cards.reducer
export const {getCardsAction, addCardAction, deleteCardAction} = Cards.actions
