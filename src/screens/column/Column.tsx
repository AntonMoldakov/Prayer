import * as React from "react";
import {useEffect} from 'react'
import {useRoute, RouteProp} from '@react-navigation/native'
import {cardsOperations} from "../../state/cards";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {useWindowDimensions, Text, View} from 'react-native'
import {Prayers, Subscribed} from "../../components";
import styles from "./Column.styles";
import {useAppDispatch} from "../../state/store";
import colors from "../../styles/colors";


const Column = () => {
	const dispatch = useAppDispatch()

	const route = useRoute<RouteProp<any, 'Column'>>();
	const {columnId} = route.params;

	useEffect(() => {
		dispatch(cardsOperations.getCards())
	}, [dispatch]);

	const getTabBarIcon = (props) => {
		const {route} = props

		if (route.key === 'Subscribed') {
			return <View style={styles.bubble}>
				<Text style={styles.bubbleText}>3</Text>
			</View>

		}
	}

	const renderScene = SceneMap({
		Prayers: () => <Prayers columnId={columnId}/>,
		Subscribed: () => <Subscribed columnId={columnId}/>
	})


	const layout = useWindowDimensions()
	const [index, setIndex] = React.useState(0)
	const [routes] = React.useState([
		{key: 'Prayers', title: 'My Prayers'},
		{key: 'Subscribed', title: 'Subscribed'},
	])


	const renderTabBar = props => (
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


