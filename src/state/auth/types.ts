export type initialStateType = {
	error: string,
	user: {
		token: string,
		name: string,
		email: string,
		password: string
	}
}

export type signIn = {
	email: string,
	password: string
}

export type signUp = {
	name: string,
} & signIn

export type error = string
