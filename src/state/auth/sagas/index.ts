import {call, all} from "redux-saga/effects";
import onSignIn from "./signIn";
import onSignUp from "./signUp";
import onClearError from "./clearError";
import signOut from "./signOut";

export function* authSagas() {
	yield all([call(onSignIn), call(onSignUp), call(onClearError), call(signOut)]);
}
