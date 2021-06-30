import React from 'react'
import {Alert, Pressable, Text, StyleSheet} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ColumnPreview = ({title, id}) => {

	const renderRightActions = () => {
		return (
			<Pressable style={[styles.container, styles.redBorder]}
				onPress={() => Alert.alert('Delete desk')}>
				<Text style={styles.text}>Delete</Text>
			</Pressable>
		);
	};

	return (
		<Swipeable renderRightActions={renderRightActions}>
			<Pressable style={styles.container}
				onPress={() => Alert.alert('Open Desk')}>
				<Text style={styles.text}>{title}</Text>
			</Pressable>
		</Swipeable>
	);
};

export default ColumnPreview;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		marginHorizontal: 15,
		marginVertical: 10,
		paddingLeft: 15,
		paddingVertical: 20,
		borderWidth: 1,
		borderColor: '#E5E5E5',
		borderRadius: 4,
	},
	text: {
		fontFamily: 'SF UI Text',
		fontSize: 17,
		color: '#514D47',
	},
	redBorder: {
		borderColor: 'red'
	}
})
