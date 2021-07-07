import * as React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {Swipeable} from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';
import {columnsOperations} from "../../state/ducks/columns";
import styles from "./ColumnPreview.styles";
import {useAppDispatch} from "../../state/store";
import {DeleteButton} from "../../ui/DeleteButton";

interface IProps {
	title: string,
	id: number
}

const ColumnPreview = ({title, id}: IProps) => {
	const navigation = useNavigation();
	const dispatch = useAppDispatch()
	const renderRightActions = () => <DeleteButton onPress={dispatch(columnsOperations.deleteColumn)} id={id}/>
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


