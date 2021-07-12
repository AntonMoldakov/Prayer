import * as React from 'react'
import {Desk, Column, Card} from "./screens"
import {createStackNavigator, StackNavigationProp} from "@react-navigation/stack"
import {NavigationContainer, RouteProp} from "@react-navigation/native"
import styles from "../Navigation.styles"
import {useAppDispatch} from "/state"
import {startAddColumn} from "state/columns/actions"
import colors from "styles/colors"
import {ColumnTitle} from "components"
import {HandsIcon, SettingsIcon, SmallPlusIcon} from "/assets/icons/components"
import {View} from "react-native";
import {HeaderIconButton} from "ui";

const StackAuth = createStackNavigator()

const Authorized = () => {
	const dispatch = useAppDispatch()
	return (
		<NavigationContainer>
			<StackAuth.Navigator screenOptions={
				{
					headerTitleAlign: 'center',
					headerTitleStyle: styles.headerTitle,
					cardStyle: styles.card,
				}
			}>
				<StackAuth.Screen
					name="Desk"
					component={Desk}
					options={{
						headerStyle: styles.deskScreenHeader,
						title: 'My Desk',
						headerRight: () => (
							<HeaderIconButton onPress={() => dispatch(startAddColumn())}>
								<SmallPlusIcon style={styles.HeaderIcon}/>
							</HeaderIconButton>
						)
					}}
				/>
				<StackAuth.Screen
					name="Column"
					component={Column}
					options={{
						headerTitle: () => <ColumnTitle/>,
						headerRight: () => (
							<HeaderIconButton>
								<SettingsIcon size={24} style={styles.HeaderIcon}/>
							</HeaderIconButton>
						)
					}}
				/>
				<StackAuth.Screen
					name="Card"
					component={Card}
					options={{
						headerStyle: styles.headerCard,
						headerTintColor: colors.white,
						headerTitle: () => null,
						headerRight: () =>
							<View>
								<HandsIcon color={colors.white} size={29} style={styles.HeaderIcon}/>
							</View>
					}}
				/>
			</StackAuth.Navigator>
		</NavigationContainer>
	)
}

export default Authorized

type StackAuthParamList = {
	Desk: undefined
	Column: { columnId: number, columnTitle: string }
	Card: { cardId: number }
}

export type DeskScreenNavigationProps = {
	route: RouteProp<StackAuthParamList, 'Desk'>
	navigation: StackNavigationProp<StackAuthParamList, 'Desk'>
}

export type ColumnScreenNavigationProps = {
	route: RouteProp<StackAuthParamList, 'Column'>
	navigation: StackNavigationProp<StackAuthParamList, 'Column'>
}

export type CardScreenNavigationProps = {
	route: RouteProp<StackAuthParamList, 'Card'>
	navigation: StackNavigationProp<StackAuthParamList, 'Card'>
}

