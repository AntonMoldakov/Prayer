import * as React from 'react'
import {Alert, TouchableOpacity} from 'react-native'
import {Desk, Column, Auth} from "./screens"
import {ColumnTitle} from './common'
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import {useAppDispatch, useAppSelector} from "./hooks";
import {columnsOperations} from "./state/ducks/columns";
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Settings from 'react-native-vector-icons/Feather';
const Stack = createStackNavigator()

const Navigation = () => {
	const dispatch = useAppDispatch()
	const [isLogin] = useAppSelector(
		(state) => {
			const {auth} = state
			return [auth.isLogin]
		});
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={
				{
					headerTitleAlign: 'center',
					headerTitleStyle: {color: '#514D47', fontWeight: '500'},
					headerStyle: {borderBottomWidth: 1, borderColor: '#E5E5E5'},
					cardStyle: {backgroundColor: '#fff'},
				}
			}>
				{!isLogin &&
				<Stack.Screen
					name="Auth"
					component={Auth}
					options={{
						headerStyle: {
							borderBottomWidth: 0,
						}, title: 'Welcome'
					}}
				/>
				}
				<Stack.Screen
					name="Desk"
					component={Desk}
					options={{
						title: 'My Desk',
						headerRight: () => (
							<TouchableOpacity onPress={() => dispatch(columnsOperations.startAddColumn())}>
								<Icon
									name="plus"
									size={28}
									color="#72A8BC"
									style={{marginRight: 10}}
								/>
							</TouchableOpacity>
						)
					}}
				/>
				<Stack.Screen
					name="Column"
					component={Column}
					options={{
						headerStyle: {
							borderBottomWidth: 0,
						},
						headerTitle: (props) => <ColumnTitle {...props} />,
						headerRight: () => (
							<TouchableOpacity onPress={() => Alert.alert('Start create task')}>
								<Settings
									name="settings"
									size={28}
									color="#72A8BC"
									style={{marginRight: 10}}
								/>
							</TouchableOpacity>
						)
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation

