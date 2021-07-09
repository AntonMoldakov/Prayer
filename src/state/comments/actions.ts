import {createAction} from "@reduxjs/toolkit";
import {IComment} from "interface";
import * as types from "./types";


export const addComment = createAction<types.addComment>('ADD_COMMENT')

export const getComments = createAction('GET_COMMENTS')

export const deleteComment = createAction<types.deleteComment>('DELETE_COMMENT')


export const addCommentSuccess = createAction<IComment>('comments/addComment')

export const getCommentsSuccess = createAction<Array<IComment>>('comments/getComments')

export const deleteCommentSuccess = createAction<types.deleteComment>('comments/deleteComment')


