import {TouchableOpacity, Text} from 'react-native'
import * as React from "react";
import styles from "./DeleteButton.styles";

interface IProps {
	id: number,
	onPress: (id: number) => void
}

const DeleteButton = ({onPress, id}: IProps) => {
	return (
		<TouchableOpacity style={styles.delete}
		                  onPress={() => onPress(id)}>
			<Text style={styles.DeleteText}>Delete</Text>
		</TouchableOpacity>
	);
};

export default DeleteButton
