import React from 'react'
import {Alert, TouchableOpacity, Text, StyleSheet} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ColumnPreview = ({title, id}) => {

	const renderRightActions = () => {
		return (
			<TouchableOpacity style={styles.delete}
			                  onPress={() => Alert.alert('Delete desk: ' + id)}>
				<Text style={styles.DeleteText}>Delete</Text>
			</TouchableOpacity>
		);
	};

	return (
		<Swipeable renderRightActions={renderRightActions}
		           containerStyle={styles.swipeableContainer}
		           childrenContainerStyle={styles.swipeableChildContainer}>
			<TouchableOpacity style={styles.item}
			                  onPress={() => Alert.alert('Open Desk')}>
				<Text style={styles.text}>{title}</Text>
			</TouchableOpacity>
		</Swipeable>
	);
};

export default ColumnPreview;

const styles = StyleSheet.create({
	item: {
		borderWidth: 1,
		borderColor: '#E5E5E5',
		backgroundColor: '#fff',
		borderRadius: 4,
		paddingHorizontal: 15,
		paddingVertical: 20,
		marginBottom: 10,
	},
	text: {
		fontFamily: 'SF UI Text',
		fontSize: 17,
		lineHeight: 20,
		textAlign: 'left',
		color: '#514D47',
	},
	DeleteText: {
		fontFamily: 'SF UI Text',
		fontSize: 17,
		color: '#FFF',
	},
	delete: {
		width: '30%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#AC5253',
		marginBottom: 10,
	},
	swipeableContainer: {
		width: '100%',
	},
	swipeableChildContainer: {
		width: '100%',
	},
})
