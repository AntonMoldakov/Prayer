import * as React from "react";
import {useEffect, useState} from 'react'
import {NavigationState, SceneMap, SceneRendererProps, TabBar, TabView} from "react-native-tab-view";
import {useWindowDimensions, Text, View} from 'react-native'
import {Prayers, Subscribed} from "./components";
import styles from "./Column.styles";
import {useAppDispatch} from "/state";
import colors from "styles/colors";
import {getCards} from "state/cards/actions";
import {ColumnScreenNavigationProps} from "../../Authorized";
import {Loader} from "ui";
import {useSelector} from "react-redux";
import {selectCardsIsLoading} from "state/cards/selectors";

interface GetTabBarIconProps {
	route: {
		key: string
	}
}


const Column = (props: ColumnScreenNavigationProps) => {
	const [index, setIndex] = useState(0)
	const [routes] = useState([
		{key: 'Prayers', title: 'My Prayers'},
		{key: 'Subscribed', title: 'Subscribed'},
	])

	const dispatch = useAppDispatch()
	const {columnId} = props.route.params;
	const isLoading = useSelector(selectCardsIsLoading)
	useEffect(() => {
		dispatch(getCards())
	}, [dispatch]);

	const getTabBarIcon = (props: GetTabBarIconProps) => {
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
		<>
			{isLoading && <Loader/>}
			<TabView
				navigationState={{index, routes}}
				renderScene={renderScene}
				renderTabBar={renderTabBar}
				onIndexChange={setIndex}
				initialLayout={{width: layout.width}}
			/>
		</>
	)
}

export default Column

