import axios from "axios";
import store from "state";

const api = axios.create({
	baseURL: 'https://prayer.herokuapp.com/',
	responseType: 'json'
});

api.interceptors.request.use((config) => {
	const token = store.getState().auth.user.token

	if (!token) {
		return config;
	}

	const Authorization = `Bearer ${token}`;

	return {
		...config,
		headers: {...config.headers, Authorization},
	};
});

export default api
