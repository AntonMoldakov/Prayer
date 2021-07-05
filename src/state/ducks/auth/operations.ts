import {Dispatch} from "redux";
import {signInAction, errorAction} from "./reducer";
import {authAPI} from "../../../api";

const signIn = (email: string, password: string) => async (dispatch: Dispatch) => {
	let response = await authAPI.signIn(email, password);
	let token: string = response.data.token
	let error: string = response.data.message
	if (error) {
		dispatch(errorAction({error: 'incorrect email or password'}))
	} else {
		dispatch(signInAction({token}))
		dispatch(errorAction({error: ''}))
	}
}
const signUp = (email: string, userName: string, password: string) => async (dispatch: Dispatch) => {
	let response: { data: { token: string } } = await authAPI.signUp(email, userName, password)
	let token: string = response.data.token
	if (token) {
		dispatch(signInAction({token}))
		dispatch(errorAction({error: ''}))
	} else {
		dispatch(errorAction({error: 'Email is already in use'}))
	}
}

const clearError = () => (dispatch: Dispatch) => {
	dispatch(errorAction({error: ''}))
}


const operations = {signIn, signUp, clearError}

export default operations
