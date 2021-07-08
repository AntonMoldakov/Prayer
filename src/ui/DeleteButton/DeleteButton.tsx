import {TouchableOpacity, Text} from 'react-native'
import * as React from "react";
import styles from "./DeleteButton.styles";
import {useAppDispatch} from "../../state";

interface IProps {
	onPress: (id: number) => any,
	id: number
}

const DeleteButton = ({onPress, id}: IProps) => {
	const dispatch = useAppDispatch()
	return (
		<TouchableOpacity style={styles.delete}
		                  onPress={() => dispatch(onPress(id))}>
			<Text style={styles.DeleteText}>Delete</Text>
		</TouchableOpacity>
	);
};

export default DeleteButton
