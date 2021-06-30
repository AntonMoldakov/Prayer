import React from 'react'
import {Alert, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import {Desk} from "./screens"
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { screensEnabled } from 'react-native-screens';

const Stack = createStackNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{headerTitleAlign: 'center'}}>
				<Stack.Screen
					name="Desk"
					component={Desk}
					options={{
						title: 'My Desk',
						headerRight: () => (
							<Pressable onPress={() => Alert.alert('Start create desk')}>
								<Icon
									name="plus"
									size={28}
									color="#72A8BC"
								/>
							</Pressable>
						)
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
