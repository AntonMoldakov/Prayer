import * as React from "react";
import {CustomTextInput} from "../../ui";
import {View, Text, TextInputProps} from 'react-native'
import styles from "./InputField.styles";
import {FieldRenderProps} from "react-final-form";

type InputFieldProps =
	{
		onChangeText?: (text: string) => void,
		onBlur?: () => void,
		onSubmitEditing?: () => void,
		inputValue?: string,
	}
	& Omit<FieldRenderProps<string> & TextInputProps, 'onChangeText' | 'onBlur' | 'onChange' | 'inputValue' | 'onSubmitEditing'>

const InputField = ({input, meta, ...rest}: InputFieldProps) => {
	return (
		<View>
			<CustomTextInput  {...input} {...rest}/>
			{
				meta.error && meta.touched &&
				<Text style={styles.error}>{meta.error}</Text>
			}
		</View>)
}

export default InputField
