import {Dispatch} from "redux"
import {getCardsAction, addCardAction, deleteCardAction, checkedCardAction} from "./reducer"
import {cardAPI} from "../../../api"
import {ICard} from "../../../interface";
import {sessionOperations} from "../session";

const getCards = () => async (dispatch: Dispatch) => {
	dispatch(sessionOperations.startLoading())
	const response = await cardAPI.getCards()
	let cards: ICard[] = response.data
	if (cards) {
		dispatch(getCardsAction({cards}))
		dispatch(sessionOperations.stopLoading())
	}
}

const addCard = (columnId: number, title: string) => async (dispatch: Dispatch) => {
	const response = await cardAPI.addCard(columnId, title)
	let card: ICard = response.data
	if (response.status === 201) {
		dispatch(addCardAction({card}))
	}
}

const checkedCard = (id: number, checked: boolean) => async (dispatch: Dispatch) => {
	const response = await cardAPI.checkedCard(id, (!checked))
	if (response.status === 200) {
		dispatch(checkedCardAction({id}))
	}
}

const deleteCard = (id: number) => async (dispatch: Dispatch) => {
	const response = await cardAPI.deleteCard(id)
	if (response.status === 200) {
		dispatch(deleteCardAction({id}))
	}
}

const operations = {getCards, addCard, deleteCard, checkedCard}

export default operations
