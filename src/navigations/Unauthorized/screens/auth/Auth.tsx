import * as React from 'react'
import {SignIn, SignUp} from 'components'
import {SceneMap, TabBar, TabView} from "react-native-tab-view"
import {useWindowDimensions} from 'react-native'
import styles from "./Auth.styles";
import {useAppDispatch} from "state";
import colors from "styles/colors";
import {clearError} from "state/auth/actions";


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
			indicatorStyle={styles.indicator}
			activeColor={colors.lightBlue}
			inactiveColor={colors.gray}
			pressColor={colors.lightBlue}
			labelStyle={styles.tabText}
			style={styles.tabBar}
		/>
	);

	return (
		<TabView
			navigationState={{index, routes}}
			renderScene={renderScene}
			renderTabBar={renderTabBar}
			onSwipeEnd={() => dispatch(clearError())}
			onIndexChange={setIndex}
			initialLayout={{width: layout.width}}
		/>
	)
}

export default Auth


