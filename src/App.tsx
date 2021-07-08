import * as React from 'react'
import Navigations from "./navigations/Navigations";
import {Provider} from "react-redux";
import index from "./state";


const App = () => {
	return (
		<Provider store={index}>
			<Navigations/>
		</Provider>
	)
}

export default App
