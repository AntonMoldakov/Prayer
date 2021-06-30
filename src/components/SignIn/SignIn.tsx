import React from "react";
import {useState} from 'react'
import {Button, TextInput, View, Alert} from "react-native";

const SignIn = () => {
	const [emailValue, setEmailValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')

	const onSignIn = () => {
		if (emailValue && passwordValue) {
			Alert.alert(`${emailValue}, ${passwordValue}`)
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
