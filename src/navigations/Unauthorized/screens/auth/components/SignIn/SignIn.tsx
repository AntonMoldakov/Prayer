import * as React from 'react'
import {View, TouchableOpacity, Text} from "react-native";
import styles from "./SignIn.styles";
import {Field, Form as FinalForm} from "react-final-form";
import {validate} from "utils";
import {useAppDispatch} from "/state";
import {clearError, signIn} from "state/auth/actions";
import {InputField} from "@components/index";
import {useSelector} from "react-redux";
import {selectAuthError} from "state/auth/selectors";

interface handleSubmitFormProps {
	email: string,
	password: string
}

const SignIn = () => {
	const dispatch = useAppDispatch()
	const error = useSelector(selectAuthError)

	const handleSubmitForm = (date: handleSubmitFormProps) => {
		dispatch(clearError())
		dispatch(signIn(date))
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


