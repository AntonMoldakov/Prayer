import * as React from 'react'
import {View, TouchableOpacity, Text} from "react-native";
import {authOperations} from "../../state/ducks/auth";
import styles from "./SignUp.styles";
import {Field, Form as FinalForm} from "react-final-form";
import {validate} from "../../utils";
import {InputField} from "../../common";
import {useAppDispatch, useAppSelector} from "../../state/store";

const SignIn = () => {
	const dispatch = useAppDispatch()
	const [error] = useAppSelector(
		(state) => {
			const {auth} = state
			return [auth.error]
		})

	const onSignUp = ({email, name, password}) => {
		dispatch(authOperations.clearError())
		dispatch(authOperations.signUp(email, name, password))
		email = ''
		name = ''
		password = ''
	}

	return (
		<FinalForm
			onSubmit={onSignUp}
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


