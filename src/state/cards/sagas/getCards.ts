import {takeLatest, put} from 'redux-saga/effects';
import {cardAPI} from "api";
import {ICard} from "interface";
import {getCardsSuccess, isLoadingSuccess} from "../actions";

function* getCards() {
	try {
		yield put(isLoadingSuccess(true))
		const response = yield cardAPI.getCards()
		const cards: ICard[] = response.data
		if (cards) {
			yield put(getCardsSuccess(cards))
		}
	} catch (error) {
		yield console.log(error.message);
	} finally {
		yield put(isLoadingSuccess(false))
	}
}

function* onGetCards() {
	yield takeLatest('GET_CARDS', getCards);
}


export default onGetCards
