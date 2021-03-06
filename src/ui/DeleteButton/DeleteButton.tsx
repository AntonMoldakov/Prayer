import {TouchableOpacity, Text, TouchableOpacityProps, Omit} from 'react-native'
import * as React from "react";
import styles from "./DeleteButton.styles";
import {useAppDispatch} from "/state";
import {AnyAction} from "redux";

interface DeleteButtonProps extends Omit<TouchableOpacityProps, 'onPress'> {
	onPress: (props: { id: number }) => AnyAction,
	id: number
}

const DeleteButton = ({onPress, id}: DeleteButtonProps) => {
	const dispatch = useAppDispatch()
	return (
		<TouchableOpacity style={styles.delete}
		                  onPress={() => dispatch(onPress({id}))}>
			<Text style={styles.DeleteText}>Delete</Text>
		</TouchableOpacity>
	);
};

export default DeleteButton
