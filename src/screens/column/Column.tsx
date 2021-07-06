import React, {useEffect} from 'react'
import {useRoute, RouteProp} from '@react-navigation/native'
import {useAppDispatch} from "../../hooks";
import {cardsOperations} from "../../state/ducks/cards";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {useWindowDimensions, Text, View} from 'react-native'
import {Prayers} from "../../components";
import {Subscribed} from "../../components";
import styles from "./Column.styles";


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
			indicatorStyle={{backgroundColor: '#72A8BC'}}
			tabStyle={{flexDirection: 'row-reverse'}}

			activeColor={'#72A8BC'}
			inactiveColor={'#C8C8C8'}
			pressColor={'#72A8BC'}
			labelStyle={styles.tabText}
			style={{backgroundColor: '#fff'}}
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


