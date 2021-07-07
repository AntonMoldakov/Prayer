import auth from "./auth";

import {default as columnsReducer} from "./columns";
import {default as sessionReducer} from "./session";
import {default as cardsReducer} from "./cards";
import {default as commentsReducer} from "./comments";

export const sagas = {
	authSagas: auth.authSagas

}

export const reducers = {
	authReducer: auth.reducer,
	columnsReducer,
	sessionReducer,
	cardsReducer,
	commentsReducer
}

export const actions = {
	authActions: auth.actions

}
