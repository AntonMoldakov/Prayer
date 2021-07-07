import axios from "axios";
import store from "../state/store";

const api = axios.create({
	baseURL: 'https://prayer.herokuapp.com/',
	responseType: 'json'
});

api.interceptors.request.use((config) => {
	const token = store.getState().auth.token;

	if (!token) {
		return config;
	}

	const Authorization = `Bearer ${token}`;

	return {
		...config,
		headers: {...config.headers, Authorization},
	};
});


export const authAPI = {
	signIn(email: string, password: string) {
		return api.post(`auth/sign-in`, {
			email,
			password
		});
	},
	signUp(email: string, name: string, password: string) {
		return api.post(`auth/sign-up`, {
			email,
			name,
			password
		});
	}
}

export const columnAPI = {
	getColumns() {
		return api.get('columns');
	},
	addColumn(title: string) {
		return api.post('columns', {title});
	},
	deleteColumn(id: number) {
		return api.delete(`columns/${id}`)
	}
}

export const cardAPI = {
	getCards() {
		return api.get('prayers');
	},
	addCard(columnId: number, title: string) {
		return api.post(`columns/${columnId}/prayers`, {
			description: '',
			title,
			checked: false,
			subscribed: 0,
			prayedByMe: 0,
			prayedByOthers: 0,
		});
	},
	checkedCard(id: number, checked: boolean) {
		return api.put(`prayers/${id}`, {
			checked
		});
	},
	deleteCard(id: number) {
		return api.delete(`prayers/${id}`)
	}
}

export const commentAPI = {
	getComments() {
		return api.get('comments');
	},
	addComment(cardId: number, body: string) {
		return api.post(`prayers/${cardId}/comments`, {body});
	},
	deleteComment(id: number) {
		return api.delete(`comments/${id}`)
	}
}
