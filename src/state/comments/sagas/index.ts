import {call, all} from "redux-saga/effects";
import onAddComment from "./addComment";
import onDeleteComment from "./deleteComment";
import onGetComments from "./getComments";


export function* commentsSagas() {
	yield all([
		call(onAddComment),
		call(onDeleteComment),
		call(onGetComments)]
	);
}
