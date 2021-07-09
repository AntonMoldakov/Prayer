import * as React from 'react'
import {View, TouchableOpacity, Text} from "react-native";
import styles from "./SignIn.styles";
import {Field, Form as FinalForm} from "react-final-form";
import {validate} from "utils";
import {useAppDispatch, useAppSelector} from "state";
import {clearError, signIn} from "state/auth/actions";
import {InputField} from "@components/index";

interface handleSubmitFormProps {
	email: string,
	password: string
}

const SignIn = () => {
	const dispatch = useAppDispatch()
	const [error] = useAppSelector(
		(state) => {
			const {auth} = state
			return [auth.error]
		})

	const handleSubmitForm = ({email, password}: handleSubmitFormProps) => {
		dispatch(clearError())
		dispatch(signIn(email, password))
	}

	return (
		<FinalForm
			onSubmit={handleSubmitForm}
			render={({handleSubmit}) => {
				return (
					<View style={styles.container}>
						<View>
							<Field
								name="email"
								placeholder={'email'}
								component={InputField}
								validate={validate.requiredEmail}
							/>
						</View>
						<View>
							<Field
								name="password"
								secureTextEntry
								placeholder={'password'}
								component={InputField}
								validate={validate.required}
							/>
						</View>
						{error.length > 0 && <Text style={styles.error}>{error}</Text>}
						<TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
							<Text style={styles.buttonText}>Sign in</Text>
						</TouchableOpacity>
					</View>
				)
			}}
		/>
	)
}

export default SignIn


