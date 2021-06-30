import React from 'react'
import type {Node} from 'react'
import Navigation from "./Navigation";
import {Provider} from "react-redux";
import store from "./state/store";


const App: () => Node = () => {
	return (
		<Provider store={store}>
			<Navigation/>
		</Provider>
	)
}

export default App
