import * as React from 'react'
import {useAppSelector} from "state"
import Authorized from "./Authorized/Authorized";
import Unauthorized from "./Unauthorized/Unauthorized";

const Navigations = () => {
	const [isLogin] = useAppSelector(
		(state) => {
			const {auth} = state
			return [auth.isLogin]
		});
	if (isLogin) {
		return <Authorized/>
	} else {
		return <Unauthorized/>
	}
}

export default Navigations
