import {createSlice} from "@reduxjs/toolkit";
import {ICard} from "../../../interface";

const initialState = {
	cards: [
		{id: 34, columnId: 0, title: 'Prayer 1', description: '', checked: false}
	]
}

const cards = createSlice({
	name: 'cardsReducer',
	initialState,
	reducers: {
		getCardsAction(state, action: { payload: { cards: ICard[] } }) {
			state.cards = action.payload.cards
		},
		addCardAction(state, action: { payload: { card: ICard } }) {
			state.cards.push(action.payload.card)
		},
		checkedCardAction(state, action: { payload: { id: number } }) {
			state.cards.map(card => {
				(card.id === action.payload.id) ? card.checked = !card.checked : null
				return card
			})
		},
		deleteCardAction(state, action: { payload: { id: number } }) {
			state.cards = state.cards.filter(card => card.id !== action.payload.id)
		}
	}
})

export default cards.reducer
export const {getCardsAction, addCardAction, deleteCardAction, checkedCardAction} = cards.actions
