import {takeLatest, put} from 'redux-saga/effects';
import {cardAPI} from "api";
import {ICard} from "interface";
import {getCardsSuccess} from "../actions";

function* getCards() {
	try {
		const response = yield cardAPI.getCards()
		const cards: ICard[] = response.data
		if (cards) {
			yield put(getCardsSuccess(cards))
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onGetCards() {
	yield takeLatest('GET_CARDS', getCards);
}


export default onGetCards
