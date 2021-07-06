import * as React from 'react';
import styles from './BrownButton.styles';
import {TouchableOpacity, Text} from "react-native";

interface IProps {
	text: string,
	action: () => void
}

const BrownButton = ({text, action}: IProps) => {
	return (
		<TouchableOpacity onPress={action} style={styles.buttonContainer}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	);
};

export default BrownButton;
