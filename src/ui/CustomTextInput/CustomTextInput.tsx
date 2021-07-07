import * as React from "react";
import {TextInput, TextInputProps} from 'react-native'
import styles from "./CustomTextInput.styles";

type IProps = {
	onChangeText?: (text: string) => void,
	onBlur?: () => void,
	onSubmitEditing?: () => void,
	inputValue?: string,
} & Omit<TextInputProps, 'onChangeText' | 'onBlur' | 'onChange' | 'inputValue' | 'onSubmitEditing'>

const CustomTextInput = (props: IProps) => {
	return (
		<TextInput{...props}
		          style={styles.input}/>
	)
}

export default CustomTextInput
