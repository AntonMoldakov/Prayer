import * as React from "react";
import {useEffect} from 'react'
import {NavigationState, SceneMap, SceneRendererProps, TabBar, TabView} from "react-native-tab-view";
import {useWindowDimensions, Text, View} from 'react-native'
import {Prayers, Subscribed} from "./components";
import styles from "./Column.styles";
import {useAppDispatch} from "state";
import colors from "styles/colors";
import {getCards} from "state/cards/actions";
import {ColumnScreenNavigationProps} from "../../Authorized";

interface getTabBarIconProps {
	route: {
		key: string
	}
}

const Column = (props: ColumnScreenNavigationProps) => {
	const dispatch = useAppDispatch()
	const {columnId} = props.route.params;

	useEffect(() => {
		dispatch(getCards())
	}, [dispatch]);

	const getTabBarIcon = (props: getTabBarIconProps) => {
		const {route} = props

		if (route.key === 'Subscribed') {
			return <View style={styles.bubble}>
				<Text style={styles.bubbleText}>3</Text>
			</View>
		}
	}

	const renderScene = SceneMap({
		Prayers: () => <Prayers {...props} columnId={columnId}/>,
		Subscribed: () => <Subscribed {...props} columnId={columnId}/>
	})


	const layout = useWindowDimensions()
	const [index, setIndex] = React.useState(0)
	const [routes] = React.useState([
		{key: 'Prayers', title: 'My Prayers'},
		{key: 'Subscribed', title: 'Subscribed'},
	])


	const renderTabBar = (props: (SceneRendererProps & { navigationState: NavigationState<{ key: string, title: string }> })) => (
		<TabBar
			{...props}
			indicatorStyle={styles.indicator}
			tabStyle={styles.tab}

			activeColor={colors.lightBlue}
			inactiveColor={colors.gray}
			pressColor={colors.lightBlue}
			labelStyle={styles.tabText}
			style={styles.tabBar}
			renderIcon={
				props => getTabBarIcon(props)
			}
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

export default Column


