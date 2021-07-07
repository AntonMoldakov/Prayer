import {Dispatch} from "redux"
import {getCommentsAction, addCommentAction, deleteCommentAction} from "./reducer"
import {commentAPI} from "../../api"
import {IComment} from "../../interface";
import {sessionOperations} from "../session";

const getComments = () => async (dispatch: Dispatch) => {
	dispatch(sessionOperations.startLoading())
	const response = await commentAPI.getComments()
	let comments: IComment[] = response.data
	if (comments) {
		dispatch(getCommentsAction({comments}))
		dispatch(sessionOperations.stopLoading())
	}
}

const addComment = (cardId: number, body: string) => async (dispatch: Dispatch) => {
	const response = await commentAPI.addComment(cardId, body)
	let comment: IComment = response.data
	if (response.status === 201) {
		dispatch(addCommentAction({comment}))
	}
}

const deleteComment = (id: number) => async (dispatch: Dispatch) => {
	const response = await commentAPI.deleteComment(id)
	if (response.status === 200) {
		dispatch(deleteCommentAction({id}))
	}
}


const operations = {getComments, addComment, deleteComment}

export default operations
