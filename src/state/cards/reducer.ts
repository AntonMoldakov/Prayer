import {createSlice} from "@reduxjs/toolkit";
import {addCardSuccess, checkedCardSuccess, deleteCardSuccess, getCardsSuccess, isLoadingSuccess} from "./actions";
import {InitialStateTypes} from "./types";

const initialState: InitialStateTypes = {
	isLoading: false,
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
		builder.addCase(isLoadingSuccess, (state, action) => {
			state.isLoading = action.payload
		})
	}
})

export default cards.reducer
