import * as React from 'react'
import {SignIn, SignUp} from './components'
import {NavigationState, SceneMap, SceneRendererProps, TabBar, TabView} from "react-native-tab-view"
import {useWindowDimensions} from 'react-native'
import styles from "./Auth.styles";
import {useAppDispatch} from "/state";
import colors from "styles/colors";
import {clearError} from "state/auth/actions";
import {useSelector} from "react-redux";
import {selectAuthIsLoading} from "state/auth/selectors";
import {Loader} from "ui";

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

	const isLoading = useSelector(selectAuthIsLoading)

	const renderTabBar = (props: (SceneRendererProps & { navigationState: NavigationState<{ key: string, title: string }> })) => (
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
		<>
			{isLoading && <Loader/>}
			<TabView
				navigationState={{index, routes}}
				renderScene={renderScene}
				renderTabBar={renderTabBar}
				onSwipeEnd={() => dispatch(clearError())}
				onIndexChange={setIndex}
				initialLayout={{width: layout.width}}
			/>
		</>
	)
}

export default Auth


