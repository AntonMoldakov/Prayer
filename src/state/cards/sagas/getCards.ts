import {takeLatest, put} from 'redux-saga/effects';
import {cardAPI} from "../../../api";
import {ICard} from "../../../interface";
import {getCardsSuccess} from "../actions";
import {startLoading, stopLoading} from "../../session/actions";

function* getCards() {
	try {
		yield put(startLoading())
		const response = yield cardAPI.getCards()
		const cards: ICard[] = response.data
		if (cards) {
			yield put(getCardsSuccess(cards))
			yield put(stopLoading())
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onGetCards() {
	yield takeLatest('GET_CARDS', getCards);
}


export default onGetCards
