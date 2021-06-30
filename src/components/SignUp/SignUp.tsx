import React from "react"
import {useState} from 'react'
import {View, TextInput, Button, Alert} from 'react-native'

const SignUp = () => {
	const [emailValue, setEmailValue] = useState('')
	const [usernameValue, setUsernameValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')


	const onSignUp = () => {
		if (emailValue && setEmailValue && passwordValue) {
			Alert.alert(`${emailValue}, ${usernameValue}, ${passwordValue}`)
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
