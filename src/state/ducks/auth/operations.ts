import {Dispatch} from "redux";
import {signInAction} from "./reducer";
import {authAPI} from "../../../api";

const signIn = (email: string, password: string) => async (dispatch: Dispatch) => {
	let response = await authAPI.signIn(email, password);
	let token: string = response.data.token
	if (token)
		dispatch(signInAction({token}))
}
const signUp = (email: string, userName: string, password: string) => async (dispatch: Dispatch) => {
	let response: { data: { token: string } } = await authAPI.signUp(email, userName, password)
	let token: string = response.data.token
	if (token)
		dispatch(signInAction({token}))
}

const operations = {signIn, signUp}

export default operations
