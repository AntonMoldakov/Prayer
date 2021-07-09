import * as React from 'react'
import {View, TouchableOpacity, Text} from "react-native";
import styles from "./SignUp.styles";
import {Field, Form as FinalForm} from "react-final-form";
import {validate} from "utils";
import {useAppDispatch, useAppSelector} from "state";
import {InputField} from "@components/index";
import {clearError, signUp} from "state/auth/actions";

interface handleSubmitFormProps {
	email: string,
	name: string,
	password: string
}

const SignIn = () => {
	const dispatch = useAppDispatch()
	const [error] = useAppSelector(
		(state) => {
			const {auth} = state
			return [auth.error]
		})

	const handleSubmitForm = ({email, name, password}: handleSubmitFormProps) => {
		dispatch(clearError())
		dispatch(signUp(email, name, password))
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
								name="name"
								placeholder={'name'}
								component={InputField}
								validate={validate.required}
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
							<Text style={styles.buttonText}>Sign up</Text>
						</TouchableOpacity>
					</View>
				)
			}}
		/>
	)
}

export default SignIn


