import * as React from 'react'
import {useState} from 'react'
import {Button, TextInput, View} from "react-native";
import {useAppDispatch} from "../../hooks";
import {authOperations} from "../../state/ducks/auth";

const SignIn = () => {
	const dispatch = useAppDispatch()
	const [emailValue, setEmailValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')

	const onSignIn = () => {
		if (emailValue && passwordValue) {
			// @ts-ignore
			dispatch(authOperations.signIn(emailValue, passwordValue))
			setEmailValue('')
			setPasswordValue('')
		}
	}

	return (
		<View>
			<TextInput
				placeholder="Email"
				onChangeText={(text) => setEmailValue(text)}
				value={emailValue}
			/>
			<TextInput
				placeholder="Password"
				secureTextEntry
				onChangeText={(text) => setPasswordValue(text)}
				value={passwordValue}
			/>
			<Button onPress={onSignIn} title={'Sign in'}/>
		</View>
	)
}

export default SignIn
