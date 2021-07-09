import * as React from 'react'
import Authorized from "./Authorized/Authorized";
import Unauthorized from "./Unauthorized/Unauthorized";
import {useSelector} from "react-redux";
import {selectUser} from "state/auth/selectors";

const Navigations = () => {
	const user = useSelector(selectUser)
	if (user.token) {
		return <Authorized/>
	} else {
		return <Unauthorized/>
	}
}

export default Navigations
