import {takeLatest, put, call} from 'redux-saga/effects';
import {cardAPI} from "api";
import {getCardsSuccess, isLoadingSuccess} from "../actions";
import {GetCardsResponse} from "api/types";

function* getCards() {
	try {
		yield put(isLoadingSuccess(true))
		const response: GetCardsResponse = yield  call(cardAPI.getCards)
		const cards = response.data
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
