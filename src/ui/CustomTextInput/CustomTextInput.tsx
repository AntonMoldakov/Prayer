import * as React from "react";
import {TextInput, TextInputProps} from 'react-native'
import styles from "./CustomTextInput.styles";

type CustomTextInputProps = {
	onChangeText?: (text: string) => void,
	onBlur?: () => void,
	onSubmitEditing?: () => void,
	inputValue?: string,
} & Omit<TextInputProps, 'onChangeText' | 'onBlur' | 'onChange' | 'inputValue' | 'onSubmitEditing'>

const CustomTextInput = (props: CustomTextInputProps) => {
	return (
		<TextInput{...props} style={styles.input}/>
	)
}

export default CustomTextInput
