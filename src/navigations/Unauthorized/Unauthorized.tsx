import * as React from 'react'
import {Auth} from "./screens"
import {createStackNavigator, StackNavigationProp} from "@react-navigation/stack"
import {NavigationContainer, RouteProp} from "@react-navigation/native"
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
					options={{
						title: 'Welcome'
					}}
				/>
			</StackUnAuth.Navigator>
		</NavigationContainer>
	)
}

export default Unauthorized

type StackUnAuthParamList = {
	Auth: undefined;
};

type AuthScreenRouteProp = RouteProp<StackUnAuthParamList, 'Auth'>;

type AuthScreenNavigationProp = StackNavigationProp<StackUnAuthParamList, 'Auth'>;

export type AuthScreenNavigationProps = {
	route: AuthScreenRouteProp;
	navigation: AuthScreenNavigationProp;
};
