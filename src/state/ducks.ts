import auth from "./auth";
import cards from "./cards";
import columns from "./columns";
import comments from "./comments";


export const sagas = {
	authSagas: auth.authSagas,
	cardsSagas: cards.cardsSagas,
	columnsSagas: columns.columnsSagas,
	commentsSagas: comments.commentsSagas
}

export const reducers = {
	authReducer: auth.reducer,
	columnsReducer: columns.reducer,
	cardsReducer: cards.reducer,
	commentsReducer: comments.reducer
}

export const actions = {
	authActions: auth.actions,
	cardsActions: cards.actions,
	columnsActions: columns.actions,
	commentsActions: comments.actions
}
