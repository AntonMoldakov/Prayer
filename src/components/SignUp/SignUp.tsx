import React from "react"
import {useState} from 'react'
import {View, TextInput, Button} from 'react-native'
import {useAppDispatch} from "../../hooks";
import {authOperations} from "../../state/ducks/auth";

const SignUp = () => {
	const dispatch = useAppDispatch()
	const [emailValue, setEmailValue] = useState('')
	const [usernameValue, setUsernameValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')


	const onSignUp = async () => {
		if (emailValue && setEmailValue && passwordValue) {
			// @ts-ignore
			dispatch(authOperations.signUp(emailValue, usernameValue, passwordValue))
			setEmailValue('')
			setUsernameValue('')
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
