import * as React from 'react'
import Plus from 'react-native-vector-icons/AntDesign'
import {View, TextInput} from 'react-native'
import styles from "./IconTextInput.styles";
import {TextInputProps} from "react-native-paper/lib/typescript/components/TextInput/TextInput";
import colors from "../../styles/colors";

interface IProps extends TextInputProps{
	onChangeText: (text: string) => void,
	onBlur: () => void,
	onSubmitEditing: () => void,
	inputValue: string,
}

const IconTextInput = ({onChangeText, onBlur, onSubmitEditing, inputValue, ...props}: IProps) => {
	return (
		<View style={styles.inputSection}>
			<Plus
				name="plus"
				size={28}
				color={colors.lightBlue}
				style={styles.inputIcon}
			/>
			<TextInput
				{...props}
				onChangeText={onChangeText}
				style={styles.input}
				onSubmitEditing={onSubmitEditing}
				onBlur={onBlur}
				value={inputValue}
			/>
		</View>
	)
}

export default IconTextInput


