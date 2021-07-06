import React, {useEffect} from 'react'
import {useRoute, RouteProp} from '@react-navigation/native'
import {useAppDispatch} from "../../hooks";
import {cardsOperations} from "../../state/ducks/cards";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {useWindowDimensions} from 'react-native'
import {Prayers, SignIn, SignUp} from "../../components";
import {Subscribed} from "../../components";
import styles from "./Column.styles";


const Column = () => {
	const dispatch = useAppDispatch()

	const route = useRoute<RouteProp<any, 'Column'>>();
	const {columnId} = route.params;

	useEffect(() => {
		dispatch(cardsOperations.getCards())
	}, [dispatch]);

	const renderScene = SceneMap({
		Prayers: () => <Prayers columnId={columnId}/>,
		SignUp
	})


	const layout = useWindowDimensions()
	const [index, setIndex] = React.useState(0)
	const [routes] = React.useState([
		{key: 'Prayers', title: 'Prayers'},
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
			onIndexChange={setIndex}
			initialLayout={{width: layout.width}}
		/>
	)
}

export default Column


