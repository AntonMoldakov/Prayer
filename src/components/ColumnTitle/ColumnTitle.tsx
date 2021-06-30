import React from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';

const ColumnTitle = () => {
	const {params} = useRoute<RouteProp<any, 'Column'>>();

	return (
		<View>
			<Text style={style.title}>{params?.columnName}</Text>
		</View>
	);
};

const style = StyleSheet.create({
	title: {
		fontSize: 17,
		lineHeight: 20,
		fontWeight: '500',
	},
});

export default ColumnTitle;
