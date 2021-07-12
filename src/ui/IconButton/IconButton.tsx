import * as React from "react";
import {TouchableOpacity, TouchableOpacityProps} from 'react-native'
import styles from "./IconButton.styles";
import colors from "styles/colors";
import {PlusIcon} from "assets/icons/components";

const IconButton = (props: TouchableOpacityProps) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
				<PlusIcon
					size={20}
					color={colors.white}
					style={styles.button}
				/>
		</TouchableOpacity>
	)
}

export default IconButton
