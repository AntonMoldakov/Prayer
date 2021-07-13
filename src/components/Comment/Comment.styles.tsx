import {StyleSheet} from 'react-native';
import colors from "styles/colors";

const styles = StyleSheet.create({
	container: {
		minHeight: 75,
		// flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderTopWidth: 1,
		borderColor: colors.lightGray,
		backgroundColor: colors.white,
		padding: 15,
	},
	data: {
		flex: 1
	},
	avatar: {
		height: 44,
		width: 44,
		borderRadius: 50,
		marginRight: 10,
	},
	titleSection: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	titleName: {
		color: colors.lightBlack,
		fontSize: 17,
		lineHeight: 20,
		marginRight: 6,
	},
	titleDate: {
		color: colors.lightGray2,
		fontSize: 13,
		lineHeight: 16,
	},
	text: {
		color: colors.lightBlack,
		fontSize: 17,
		lineHeight: 20,
	}
});

export default styles;
