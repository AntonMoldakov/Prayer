import * as React from 'react'
import {TextInput, View, TouchableOpacity, Text} from "react-native";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authOperations} from "../../state/ducks/auth";
import styles from "./SignUp.styles";
import {Field, Form as FinalForm} from "react-final-form";

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const required = (v: string) => (!v || v.trim() === '') ? 'required' : undefined
const invalidEmail = (v: string) => (!v || v.trim() === '') ? 'required' : (!reg.test(v)) ? 'email invalid' : undefined

const InputField = ({input, meta, ...rest}) => {
	return (<View>
		<TextInput
			{...input}
			{...rest}
			style={styles.input}/>
		{
			meta.error && meta.touched &&
			<Text style={styles.error}>{meta.error}</Text>
		}
	</View>)
}


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
								validate={invalidEmail}
							/>
						</View>
						<View>
							<Field
								name="name"
								placeholder={'name'}
								component={InputField}
								validate={required}
							/>
						</View>
						<View>
							<Field
								name="password"
								secureTextEntry
								placeholder={'password'}
								component={InputField}
								validate={required}
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


