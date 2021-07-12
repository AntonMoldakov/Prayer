import {IComment} from "interface";

export type addComment = {
	cardId: number,
	body: string,
	name: string
}

export type deleteComment = {
	id: number
}

export type InitialStateTypes = {
	isLoading: boolean,
	addMode: boolean,
	comments: IComment[]
}
