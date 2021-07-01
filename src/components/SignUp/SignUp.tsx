import * as React from 'react'
import {useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'
import {useAppDispatch} from "../../hooks";
import {authOperations} from "../../state/ducks/auth";

const SignUp = () => {
	const dispatch = useAppDispatch()
	const [emailValue, setEmailValue] = useState('')
	const [usernameValue, setUsernameValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')


	const onSignUp = (values: { name: string, email: string, password: string }) => {
		if (emailValue && setEmailValue && passwordValue) {
			// @ts-ignore
			dispatch(authOperations.signUp(values.email, values.name, values.password))
			setEmailValue('')
			setUsernameValue('')
			setPasswordValue('')
		}
	}

	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Email"
				onChangeText={(text) => setEmailValue(text)}
				value={emailValue}
			/>
			<TextInput
				placeholder="Username"
				onChangeText={(text) => setUsernameValue(text)}
				value={usernameValue}
			/>
			<TextInput
				placeholder="Password"
				secureTextEntry
				onChangeText={(text) => setPasswordValue(text)}
				value={passwordValue}
			/>
			<Button onPress={onSignUp} title={'Sign Up'}/>
		</View>
	)
}

export default SignUp;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15
	},
	listStyle: {
		width: '100%',
		marginTop: 15,
	},
	inputSection: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#E5E5E5',
		borderRadius: 4,
		height: 50,
		marginTop: 16,
		paddingRight: 10,
	},
	input: {
		height: '100%',
		paddingLeft: 10,
		fontSize: 17,
		lineHeight: 20,
	},
})
