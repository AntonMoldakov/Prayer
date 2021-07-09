import * as React from 'react'
import {useRoute, RouteProp} from '@react-navigation/native';
import {View, Text} from 'react-native';
import styles from "./ColumnTitle.styles";

const ColumnTitle = () => {
	const {params} = useRoute<RouteProp<any, 'Column'>>();

	return (
		<View>
			<Text style={styles.title}>{params?.columnTitle}</Text>
		</View>
	);
};

export default ColumnTitle;
