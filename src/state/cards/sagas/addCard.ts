import {takeLatest, put} from 'redux-saga/effects';
import {cardAPI} from "api";
import {PayloadAction} from "@reduxjs/toolkit";
import {ICard} from "interface";
import {addCardSuccess} from "../actions";

function* addCard(action: PayloadAction<{ columnId: number, title: string }>) {
	try {
		const response = yield cardAPI.addCard(action.payload.columnId, action.payload.title)
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

