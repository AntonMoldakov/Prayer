import * as React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {Swipeable} from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from "../../hooks";
import {columnsOperations} from "../../state/ducks/columns";
import styles from "./ColumnPreview.styles";

const ColumnPreview = ({title, id}: { title: string, id: number }) => {
	const navigation = useNavigation();
	const dispatch = useAppDispatch()
	const renderRightActions = () => {
		return (
			<TouchableOpacity style={styles.delete}
			                  onPress={() => dispatch(columnsOperations.deleteColumn(id))}>
				<Text style={styles.DeleteText}>Delete</Text>
			</TouchableOpacity>
		);
	};

	return (
		<Swipeable renderRightActions={renderRightActions}
		           containerStyle={styles.swipeableContainer}
		           childrenContainerStyle={styles.swipeableChildContainer}>
			<TouchableOpacity style={styles.item}
			                  onPress={() => navigation.navigate('Column', {columnId: id, columnTitle: title})}>
				<Text style={styles.text}>{title}</Text>
			</TouchableOpacity>
		</Swipeable>
	);
};

export default ColumnPreview;


