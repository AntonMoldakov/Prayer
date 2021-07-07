import * as React from "react";
import {CustomTextInput} from "../../ui";
import {View, Text} from 'react-native'
import styles from "./InputField.styles";
import {FieldRenderProps} from "react-final-form";

const InputField: React.FC<FieldRenderProps<any>> = ({input, meta, ...rest}) => {
	return (<View>
		<CustomTextInput {...input} {...rest}/>
		{
			meta.error && meta.touched &&
			<Text style={styles.error}>{meta.error}</Text>
		}
	</View>)
}

export default InputField
