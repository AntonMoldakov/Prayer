import React from 'react'
import {Alert, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {Desk, Column} from "./screens"
import {ColumnTitle} from './components'
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"

const Stack = createStackNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
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
