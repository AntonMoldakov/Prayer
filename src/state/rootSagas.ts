import {sagas} from "./ducks";
import {call, all} from "redux-saga/effects";

export default function* rootSaga() {
	yield all([
		call(sagas.authSagas),
		call(sagas.cardsSagas),
		call(sagas.columnsSagas),
		call(sagas.commentsSagas)
	]);
}
