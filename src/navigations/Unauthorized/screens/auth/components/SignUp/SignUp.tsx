import * as React from 'react'
import {View, TouchableOpacity, Text} from "react-native";
import styles from "./SignUp.styles";
import {Field, Form as FinalForm} from "react-final-form";
import {validate} from "utils";
import {useAppDispatch} from "state";
import {InputField} from "@components/index";
import {clearError, signUp} from "state/auth/actions";
import {useSelector} from "react-redux";
import {selectAuthError} from "state/auth/selectors";

interface handleSubmitFormProps {
	email: string,
	name: string,
	password: string
}

const SignIn = () => {
	const dispatch = useAppDispatch()
	const error = useSelector(selectAuthError)


	const handleSubmitForm = (date: handleSubmitFormProps) => {
		dispatch(clearError())
		dispatch(signUp(date))
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


