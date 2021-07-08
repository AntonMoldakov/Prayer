import * as React from "react";
import {TouchableOpacity} from 'react-native'
import styles from "./IconButton.styles";
import colors from "../../styles/colors";
import Icon from 'react-native-vector-icons/AntDesign'

const IconButton = () => {
	return (
		<TouchableOpacity>
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
