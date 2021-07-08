import {createSlice} from "@reduxjs/toolkit";
import {addCardSuccess, checkedCardSuccess, deleteCardSuccess, getCardsSuccess} from "./actions";
import {ICard} from "../../interface";

interface IInitialState {
	cards: ICard[]
}

const initialState: IInitialState = {
	cards: []
}

const cards = createSlice({
	name: 'cardsReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCardsSuccess, (state, action) => {
			state.cards = action.payload.cards
		})
		builder.addCase(addCardSuccess, (state, action) => {
			state.cards.push(action.payload.card)
		})
		builder.addCase(checkedCardSuccess, (state, action) => {
			state.cards.map(card => {
				(card.id === action.payload.id) ? card.checked = !card.checked : null
				return card
			})
		})
		builder.addCase(deleteCardSuccess, (state, action) => {
			state.cards = state.cards.filter(card => card.id !== action.payload.id)
		})
	}
})

export default cards.reducer
