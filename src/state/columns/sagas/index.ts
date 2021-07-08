import {call, all} from "redux-saga/effects";
import onAddColumn from "./addColumn";
import onStartAddColumn from "./startAddColumn";
import onDeleteColumn from "./deleteColumn";
import onGetColumns from "./getColumns";
import onStopAddColumn from "./stopAddColumn";


export function* columnsSagas() {
	yield all([
		call(onAddColumn),
		call(onStartAddColumn),
		call(onDeleteColumn),
		call(onStopAddColumn),
		call(onGetColumns)]
	);
}
