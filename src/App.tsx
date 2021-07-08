import * as React from 'react'
import Navigation from "./navigations/Navigation";
import {Provider} from "react-redux";
import index from "./state";


const App = () => {
	return (
		<Provider store={index}>
			<Navigation/>
		</Provider>
	)
}

export default App
