import * as React from 'react'
import {Auth} from "./screens"
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import styles from "../Navigation.styles";

const StackUnAuth = createStackNavigator()

const Unauthorized = () => {
	return (
		<NavigationContainer>
			<StackUnAuth.Navigator screenOptions={
				{
					headerTitleAlign: 'center',
					headerTitleStyle: styles.headerTitle,
					cardStyle: styles.card,
				}
			}>
				<StackUnAuth.Screen
					name="Auth"
					component={Auth}
					options={{title: 'Welcome'}}
				/>
			</StackUnAuth.Navigator>
		</NavigationContainer>
	)
}

export default Unauthorized

