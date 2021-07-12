import {ICard, IColumn, IComment} from "interface";

export type AuthResponse = {
	data: {
		message?: string,
		name?: string,
		email?: string,
		password?: string,
		token?: string,
		id?: number
	}
}
export type GetColumnsResponse = {
	data: Array<IColumn> & {
		message?: string
	}
}

export type PostColumnResponse = {
	status: number,
	data: IColumn & {
		message?: string,
	}
}

export type DeleteResponse = {
	status: number,
	data: {
		message?: string,
	}
}

export type GetCardsResponse = {
	data: Array<ICard> & {
		message?: string
	}
}

export type PostCardResponse = {
	status: number,
	data: ICard & {
		message?: string,
	}
}

export type CheckedResponse = {
	status: number,
	data: {
		message?: string,
	}
}

export type GetCommentsResponse = {
	data: Array<IComment> & {
		message?: string
	}
}

export type PostCommentResponse = {
	status: number,
	data: IComment & {
		message?: string,
	}
}

