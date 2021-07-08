import React from 'react'
import type {Node} from 'react'
import Navigation from "./Navigation";
import {Provider} from "react-redux";
import index from "./state";


const App: () => Node = () => {
	return (
		<Provider store={index}>
			<Navigation/>
		</Provider>
	)
}

export default App
