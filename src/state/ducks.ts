import auth from "./auth";
import cards from "./cards";
import session from "./session";
import columns from "./columns";

import {default as commentsReducer} from "./comments";

export const sagas = {
	authSagas: auth.authSagas,
	cardsSagas: cards.cardsSagas,
	sessionSagas: session.sessionSagas,
	columnsSagas: columns.columnsSagas
}

export const reducers = {
	authReducer: auth.reducer,
	columnsReducer: columns.reducer,
	sessionReducer: session.reducer,
	cardsReducer: cards.reducer,
	commentsReducer
}

export const actions = {
	authActions: auth.actions,
	cardsActions: cards.actions,
	sessionActions: session.actions,
	columnsActions: columns.actions

}
