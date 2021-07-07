import * as React from "react";
import {TextInput} from 'react-native'
import {TextInputProps} from "react-native-paper/lib/typescript/components/TextInput/TextInput";
import styles from "./CustomTextInput.styles";


const CustomTextInput: React.FC<TextInputProps> = (props) => {
	return (
		<TextInput{...props}
		          style={styles.input}/>
	)
}

export default CustomTextInput
