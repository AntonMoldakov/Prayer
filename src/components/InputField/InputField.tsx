import * as React from "react";
import {CustomTextInput} from "../../ui";
import {View, Text, TextInputProps} from 'react-native'
import styles from "./InputField.styles";
import {FieldRenderProps} from "react-final-form";

const InputField = ({input, meta, ...rest}: FieldRenderProps<string> & TextInputProps) => {
	return (
		<View>
			<CustomTextInput {...input} {...rest}/>
			{
				meta.error && meta.touched &&
				<Text style={styles.error}>{meta.error}</Text>
			}
		</View>)
}

export default InputField
