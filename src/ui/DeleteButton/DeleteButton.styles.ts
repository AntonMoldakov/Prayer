import {StyleSheet} from 'react-native';
import colors from "styles/colors";

const styles = StyleSheet.create({
	DeleteText: {
		fontFamily: 'SFUIText-Regular',
		fontSize: 13,
		color: colors.white,
	},
	delete: {
		width: '30%',
		height: '100%',

		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.vinous,
		marginBottom: 10,
	},
});

export default styles;
