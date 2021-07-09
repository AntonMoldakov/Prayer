import * as React from 'react'
import Plus from 'react-native-vector-icons/AntDesign'
import {View, TextInput, TextInputProps} from 'react-native'
import styles from "./IconTextInput.styles";
import colors from "../../styles/colors";

type IconTextInputProps = {
	onChangeText: (text: string) => void,
	onBlur: () => void,
	onSubmitEditing: () => void,
	inputValue: string,
} & Omit<TextInputProps, 'onChangeText' | 'onBlur' | 'onChange' | 'inputValue' | 'onSubmitEditing'>

const IconTextInput = ({onChangeText, onBlur, onSubmitEditing, inputValue, ...props}: IconTextInputProps) => {
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


