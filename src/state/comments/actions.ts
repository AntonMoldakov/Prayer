import {createAction} from "@reduxjs/toolkit";
import {IComment} from "interface";

export const addComment = createAction('ADD_COMMENT', function prepare(cardId: number, body: string, name: string) {
	return {payload: {cardId, body, name}}
})

export const getComments = createAction('GET_COMMENTS')

export const deleteComment = createAction('DELETE_COMMENT', function prepare(id: number) {
	return {payload: {id}}
})


export const addCommentSuccess = createAction('comments/addComment', function prepare(comment: IComment) {
	return {payload: {comment}}
})

export const getCommentsSuccess = createAction('comments/getComments', function prepare(comments: IComment[]) {
	return {payload: {comments}}
})

export const deleteCommentSuccess = createAction('comments/deleteComment', function prepare(id: number) {
	return {payload: {id}}
})


