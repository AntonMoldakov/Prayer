import * as React from 'react'
import {TouchableOpacity} from 'react-native'
import {Desk, Column, Auth, Card} from "./screens"
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import {columnsOperations} from "./state/columns";
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Settings from 'react-native-vector-icons/Feather';
import Hands from 'react-native-vector-icons/FontAwesome5';
import {useAppDispatch, useAppSelector} from "./state/store";
import colors from "./styles/colors";
import styles from "./Navigation.styles";
import {ColumnTitle} from "./components";

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
					headerTitleStyle: styles.headerTitle,
					cardStyle: styles.card,
				}
			}>
				{!isLogin &&
				<Stack.Screen
					name="Auth"
					component={Auth}
					options={{
						title: 'Welcome'
					}}
				/>
				}
				<Stack.Screen
					name="Desk"
					component={Desk}
					options={{
						headerStyle: styles.deskScreenHeader,
						title: 'My Desk',
						headerRight: () => (
							<TouchableOpacity onPress={() => dispatch(columnsOperations.startAddColumn())}>
								<Icon
									name="plus"
									size={28}
									color={colors.lightBlue}
									style={styles.HeaderIcon}
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
							<TouchableOpacity>
								<Settings
									name="settings"
									size={28}
									color={colors.lightBlue}
									style={styles.HeaderIcon}
								/>
							</TouchableOpacity>
						)
					}}
				/>
				<Stack.Screen
					name="Card"
					component={Card}
					options={{
						headerStyle: styles.headerCard,
						headerTintColor: colors.white,
						headerTitle: () => null,
						headerRight: () => <Hands
							style={styles.HeaderIcon}
							name="praying-hands"
							size={22}
							color={colors.white}
							light
						/>
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation

