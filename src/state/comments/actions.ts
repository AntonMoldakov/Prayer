import {createAction} from "@reduxjs/toolkit";
import {IComment} from "interface";

type addComment = {
	cardId: number,
	body: string,
	name: string
}

type deleteComment = {
	id: number
}

export const addComment = createAction<addComment>('ADD_COMMENT')

export const getComments = createAction('GET_COMMENTS')

export const deleteComment = createAction<deleteComment>('DELETE_COMMENT')


export const addCommentSuccess = createAction<IComment>('comments/addComment')

export const getCommentsSuccess = createAction<Array<IComment>>('comments/getComments')

export const deleteCommentSuccess = createAction<deleteComment>('comments/deleteComment')


