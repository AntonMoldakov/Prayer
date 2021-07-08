import {call, all} from "redux-saga/effects";
import onAddCard from "./addCard";
import onCheckedCard from "./checkedCards";
import onDeleteCard from "./deleteCard";
import onGetCards from "./getCards";

export function* cardsSagas() {
	yield all([call(onAddCard), call(onCheckedCard), call(onGetCards), call(onDeleteCard)]);
}
