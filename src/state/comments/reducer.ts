import {createSlice} from "@reduxjs/toolkit";
import {addCommentSuccess, deleteCommentSuccess, getCommentsSuccess} from "./actions";
import {IComment} from "interface";

interface IInitialState {
	addMode: boolean,
	comments: IComment[]
}

const initialState: IInitialState = {
	addMode: false,
	comments: []
}

const comments = createSlice({
	name: 'commentsReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCommentsSuccess, (state, action) => {
			state.comments = action.payload.comments
		})
		builder.addCase(addCommentSuccess, (state, action) => {
			state.comments.push(action.payload.comment)
		})
		builder.addCase(deleteCommentSuccess, (state, action) => {
			state.comments = state.comments.filter(comment => comment.id !== action.payload.id)
		})
	}
})

export default comments.reducer
