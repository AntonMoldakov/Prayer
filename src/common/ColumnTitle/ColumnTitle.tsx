import * as React from 'react'
import {useRoute, RouteProp} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';

const ColumnTitle = (props) => {
	const {params} = useRoute<RouteProp<any, 'Column'>>();

	return (
		<View>
			<Text style={style.title}>{params?.columnTitle}</Text>
		</View>
	);
};

const style = StyleSheet.create({
	title: {
		color: '#514D47',
		fontWeight: '700',
		fontFamily: 'SF UI Text',
		fontSize: 17
	},
});

export default ColumnTitle;
