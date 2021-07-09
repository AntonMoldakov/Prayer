import {createSlice} from "@reduxjs/toolkit";
import {addCardSuccess, checkedCardSuccess, deleteCardSuccess, getCardsSuccess} from "./actions";
import {InitialStateTypes} from "./types";

const initialState: InitialStateTypes = {
	cards: []
}

const cards = createSlice({
	name: 'cardsReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCardsSuccess, (state, action) => {
			state.cards = action.payload
		})
		builder.addCase(addCardSuccess, (state, action) => {
			state.cards.push(action.payload)
		})
		builder.addCase(checkedCardSuccess, (state, action) => {
			state.cards.map(card => {
				(card.id === action.payload) ? card.checked = !card.checked : null
				return card
			})
		})
		builder.addCase(deleteCardSuccess, (state, action) => {
			state.cards = state.cards.filter(card => card.id !== action.payload.id)
		})
	}
})

export default cards.reducer
