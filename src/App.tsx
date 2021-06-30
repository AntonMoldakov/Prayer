import React from 'react'
import type {Node} from 'react'
import {SafeAreaView} from 'react-native'
import Navigation from "./Navigation";
import {Desk} from "./screens";


const App: () => Node = () => {
	return (
		<SafeAreaView>
			{/*<Navigation/>*/}
			<Desk/>
		</SafeAreaView>
	)
}

export default App
