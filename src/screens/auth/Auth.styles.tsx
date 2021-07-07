import {StyleSheet} from 'react-native';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: '#fff'
	},
	indicator: {
		backgroundColor: colors.lightBlue,
	},
	tabText: {
		fontFamily: 'SF UI Text',
		fontSize: 13,
		lineHeight: 16,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	}
})

export default styles;
