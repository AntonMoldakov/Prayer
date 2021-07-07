import * as React from "react";
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import styles from "./IconButton.styles";
import colors from "../../styles/colors";

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
