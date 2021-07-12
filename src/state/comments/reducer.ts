import {createSlice} from "@reduxjs/toolkit";
import {addCommentSuccess, deleteCommentSuccess, getCommentsSuccess, isLoadingSuccess} from "./actions";
import {InitialStateTypes} from "state/comments/types";


const initialState: InitialStateTypes = {
	isLoading: false,
	addMode: false,
	comments: []
}

const comments = createSlice({
	name: 'commentsReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCommentsSuccess, (state, action) => {
			state.comments = action.payload
		})
		builder.addCase(addCommentSuccess, (state, action) => {
			state.comments.push(action.payload)
		})
		builder.addCase(deleteCommentSuccess, (state, action) => {
			state.comments = state.comments.filter(comment => comment.id !== action.payload.id)
		})
		builder.addCase(isLoadingSuccess, (state, action) => {
			state.isLoading = action.payload
		})
	}
})

export default comments.reducer
