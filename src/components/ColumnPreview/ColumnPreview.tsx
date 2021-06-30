import React from 'react'
import {Alert, Pressable, Text} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ColumnPreview = ({title, id}) => {

	const renderRightActions = () => {
		return (
			<Pressable
				onPress={() => Alert.alert('Delete desk')}>
				<Text>Delete</Text>
			</Pressable>
		);
	};

	return (
		// <Swipeable renderRightActions={renderRightActions}>
			<Pressable
				onPress={() => Alert.alert('Open Desk')}>
				<Text>{title}</Text>
			</Pressable>
		// </Swipeable>
	);
};

export default ColumnPreview;
