import * as React from 'react'
import {Alert, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {Desk, Column, Auth} from "./screens"
import {ColumnTitle} from './common'
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import {useAppSelector} from "./hooks";

const Stack = createStackNavigator()

const Navigation = () => {
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
					headerTitleStyle: {fontWeight: '500'},
					headerStyle: {borderBottomWidth: 1, borderColor: '#E5E5E5'},
					cardStyle: {backgroundColor: '#fff'},
				}
			}>
				{!isLogin &&
				<Stack.Screen
					name="Auth"
					component={Auth}
					options={{title: 'Welcome'}}
				/>
				}
				<Stack.Screen
					name="Desk"
					component={Desk}
					options={{
						title: 'My Desk',
						headerRight: () => (
							<TouchableOpacity onPress={() => Alert.alert('Start create desk')}>
								<Icon
									name="plus"
									size={28}
									color="#72A8BC"
									style={styles.icon}
								/>
							</TouchableOpacity>
						)
					}}
				/>
				<Stack.Screen
					name="Column"
					component={Column}
					options={{
						headerTitle: (props) => <ColumnTitle {...props} />,
						headerRight: () => (
							<TouchableOpacity onPress={() => Alert.alert('Start create task')}>
								<Icon
									name="plus"
									size={28}
									color="#72A8BC"
									style={styles.icon}
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

const styles = StyleSheet.create({
	icon: {
		marginRight: 10,
	},
})
