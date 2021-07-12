import {StyleSheet} from 'react-native';
import colors from "styles/colors";

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: '#fff'
	},
	indicator: {
		backgroundColor: colors.lightBlue,
	},
	tabText: {
		fontFamily: 'SFUIText-Bold',
		fontSize: 13,
		lineHeight: 16,
		textTransform: 'uppercase',
	}
})

export default styles;
