import * as React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {Swipeable} from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';
import styles from "./ColumnPreview.styles";
import {DeleteButton} from "../../ui/DeleteButton";
import {deleteColumn} from "../../state/columns/actions";

interface IProps {
	title: string,
	id: number
}

const ColumnPreview = ({title, id}: IProps) => {
	const navigation = useNavigation();
	const renderRightActions = () => <DeleteButton onPress={deleteColumn} id={id}/>
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


