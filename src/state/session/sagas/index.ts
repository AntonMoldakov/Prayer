import {call, all} from "redux-saga/effects";
import onStartLoading from "./startLoading";
import onStopLoading from "./stopLoading";

export function* sessionSagas() {
	yield all([call(onStartLoading), call(onStopLoading)]);
}
