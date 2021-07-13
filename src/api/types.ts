import {ICard, IColumn, IComment, IUser} from "interface";

export type AuthResponse = {
	data: IUser
}
export type GetColumnsResponse = {
	data: Array<IColumn>
}

export type PostColumnResponse = {
	status: number,
	data: IColumn 
}

export type DeleteResponse = {
	status: number,
	data: {
		message?: string,
	}
}

export type GetCardsResponse = {
	data: Array<ICard> 
}

export type PostCardResponse = {
	status: number,
	data: ICard 
}

export type CheckedResponse = {
	status: number,
	data: {
		message?: string,
	}
}

export type GetCommentsResponse = {
	data: Array<IComment> 
}

export type PostCommentResponse = {
	status: number,
	data: IComment 
}

