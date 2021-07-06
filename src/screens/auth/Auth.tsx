import * as React from 'react'
import {SignIn, SignUp} from '../../components'
import {SceneMap, TabBar, TabView} from "react-native-tab-view"
import {useWindowDimensions} from 'react-native'
import {useAppDispatch} from "../../hooks";
import {authOperations} from "../../state/ducks/auth";
import styles from "./Auth.styles";


const renderScene = SceneMap({
	SignIn,
	SignUp
})

function Auth() {
	const dispatch = useAppDispatch()
	const layout = useWindowDimensions()
	const [index, setIndex] = React.useState(0)
	const [routes] = React.useState([
		{key: 'SignIn', title: 'Sign In'},
		{key: 'SignUp', title: 'Sign Up'},
	])
	const renderTabBar = props => (
		<TabBar
			{...props}
			indicatorStyle={{backgroundColor: '#72A8BC'}}
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
			onSwipeEnd={() => dispatch(authOperations.clearError())}
			onIndexChange={setIndex}
			initialLayout={{width: layout.width}}
		/>
	)
}

export default Auth


