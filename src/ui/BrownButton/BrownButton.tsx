import * as React from 'react';
import styles from './BrownButton.styles';
import {TouchableOpacity, Text, TouchableOpacityProps} from "react-native";

interface BrownButtonProps extends TouchableOpacityProps{
	text: string,
}

const BrownButton = ({text, onPress}: BrownButtonProps) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	);
};

export default BrownButton;
