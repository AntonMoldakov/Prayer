import {createSlice} from "@reduxjs/toolkit";
import {IComment} from "../../../interface";

const initialState = {
	addMode: false,
	comments: []
}

const comments = createSlice({
	name: 'commentsReducer',
	initialState,
	reducers: {
		getCommentsAction(state, action: { payload: { comments: IComment[] } }) {
			state.comments = action.payload.comments
		},
		addCommentAction(state, action: { payload: { comment: IComment } }) {
			state.comments.push(action.payload.comment)
		},
		deleteCommentAction(state, action: { payload: { id: number } }) {
			state.comments = state.comments.filter(comment => comment.id !== action.payload.id)
		}
	}
})

export default comments.reducer
export const {getCommentsAction, addCommentAction, deleteCommentAction} = comments.actions
