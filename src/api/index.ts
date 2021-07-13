import {
	AuthResponse, CheckedResponse,
	DeleteResponse,
	GetCardsResponse,
	GetColumnsResponse, GetCommentsResponse,
	PostCardResponse,
	PostColumnResponse, PostCommentResponse
} from "./types";
import api from "api/httpServices";


export const authAPI = {
	signIn(email: string, password: string) {
		return api.post<AuthResponse>(`auth/sign-in`, {
			email,
			password
		});
	},
	signUp(email: string, name: string, password: string) {
		return api.post<AuthResponse>(`auth/sign-up`, {
			email,
			name,
			password
		});
	}
}

export const columnAPI = {
	getColumns() {
		return api.get<GetColumnsResponse>('columns');
	},
	addColumn(title: string) {
		return api.post<PostColumnResponse>('columns', {title});
	},
	deleteColumn(id: number) {
		return api.delete<DeleteResponse>(`columns/${id}`)
	}
}

export const cardAPI = {
	getCards() {
		return api.get<GetCardsResponse>('prayers');
	},
	addCard(columnId: number, title: string) {
		return api.post<PostCardResponse>(`columns/${columnId}/prayers`, {
			description: '',
			title,
			checked: false,
			subscribed: 0,
			prayedByMe: 0,
			prayedByOthers: 0,
		});
	},
	checkedCard(id: number, checked: boolean) {
		return api.put<CheckedResponse>(`prayers/${id}`, {
			checked
		});
	},
	deleteCard(id: number) {
		return api.delete<DeleteResponse>(`prayers/${id}`)
	}
}

export const commentAPI = {
	getComments() {
		return api.get<GetCommentsResponse>('comments');
	},
	addComment(cardId: number, body: string, name: string) {
		return api.post<PostCommentResponse>(`prayers/${cardId}/comments`, {body, name});
	},
	deleteComment(id: number) {
		return api.delete<DeleteResponse>(`comments/${id}`)
	}
}
