import {Dispatch} from "redux"
import {changeLoadingMode} from './reducer'

const startLoading = () => (dispatch: Dispatch) => {
	dispatch(changeLoadingMode({mode: true}))
}

const stopLoading = () => (dispatch: Dispatch) => {
	dispatch(changeLoadingMode({mode: false}))
}


const operations = {startLoading, stopLoading}

export default operations
