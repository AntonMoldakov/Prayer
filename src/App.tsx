import * as React from 'react'
import Navigations from "./navigations/Navigations";
import {Provider} from "react-redux";
import store from "/state";


const App = () => {
	return (
		<Provider store={store}>
			<Navigations/>
		</Provider>
	)
}

export default App
