import {takeLatest, put, call} from 'redux-saga/effects';
import {cardAPI} from "api";
import {PayloadAction} from "@reduxjs/toolkit";
import {ICard} from "interface";
import {addCardSuccess} from "../actions";
import {PostCardResponse} from "api/types";

function* addCard(action: PayloadAction<{ columnId: number, title: string }>) {
	try {
		const response: PostCardResponse = yield call(cardAPI.addCard, action.payload.columnId, action.payload.title)
		const card: ICard = response.data
		if (response.status === 201) {
			yield put(addCardSuccess(card))
		}
	} catch (error) {
		yield console.log(error.message);
	}
}

function* onAddCard() {
	yield takeLatest('ADD_CARD', addCard);
}

export default onAddCard

