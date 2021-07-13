import {IUser} from "interface";

export type initialStateType = {
	isLoading: boolean,
	error: string,
	user: IUser
}

export type signIn = {
	email: string,
	password: string
}

export type signUp = {
	name: string,
} & signIn

export type error = string
