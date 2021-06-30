import axios from "axios";
import store from "../state/store";

const api = axios.create({
	baseURL: 'https://prayer.herokuapp.com/',
	responseType: 'json'
});

// api.interceptors.request.use((config) => {
// 	const token = store.getState().auth.token;
//
// 	if (!token) {
// 		return config;
// 	}
//
// 	return {
// 		...config,
// 		headers: {...config.headers, token},
// 	};
// });

export const authAPI = {
	signIn(email: string, password: string) {
		return api.post(`auth/sign-in`, {
			email,
			password
		}).then(response => response);
	},
	signUp(email: string, name: string, password: string) {
		return api.post(`auth/sign-up`, {
			email,
			name,
			password
		}).then(response => response);
	}
}
