import * as React from 'react'
import {SignIn, SignUp} from '../../components'
import {SceneMap, TabBar, TabView} from "react-native-tab-view"
import {useWindowDimensions, StyleSheet} from 'react-native'


const renderScene = SceneMap({
	SignIn,
	SignUp
})

function Auth() {
	const layout = useWindowDimensions()
	const [index, setIndex] = React.useState(0)
	const [routes] = React.useState([
		{key: 'SignIn', title: 'Sign In'},
		{key: 'SignUp', title: 'Sign Up'},
	])

	const renderTabBar = props => (
		<TabBar
			{...props}
			activeColor={'#72A8BC'}
			inactiveColor={'#C8C8C8'}
			pressColor={'#72A8BC'}
			labelStyle={styles.tabText}
			style={{backgroundColor: '#fff'}}
		/>
	);

	return (
		<TabView
			navigationState={{index, routes}}
			renderScene={renderScene}
			renderTabBar={renderTabBar}
			onIndexChange={setIndex}
			initialLayout={{width: layout.width}}
		/>
	)
}

export default Auth

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	tabBar: {
		flexDirection: 'row'
	},
	tabItem: {
		flex: 1,
		alignItems: 'center',
		padding: 16,
	},
	tabText: {
		fontFamily: 'SF UI Text',
		fontSize: 13,
		lineHeight: 16,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	}
})

