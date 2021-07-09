import * as React from "react";
import {TouchableOpacity, TouchableOpacityProps} from 'react-native'
import styles from "./IconButton.styles";
import colors from "styles/colors";
import Icon from 'react-native-vector-icons/AntDesign'

const IconButton = (props: TouchableOpacityProps) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<Icon
				name="plus"
				size={20}
				color={colors.white}
				style={styles.button}
			/>
		</TouchableOpacity>
	)
}

export default IconButton
