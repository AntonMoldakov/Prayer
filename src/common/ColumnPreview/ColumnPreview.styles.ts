import {StyleSheet} from 'react-native';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
	item: {
		borderWidth: 1,
		borderColor: colors.lightGray,
		backgroundColor: colors.white,
		borderRadius: 4,
		paddingHorizontal: 15,
		paddingVertical: 20,
		marginBottom: 10,
	},
	text: {
		fontFamily: 'SF UI Text',
		fontSize: 17,
		fontWeight: '700',
		lineHeight: 20,
		textAlign: 'left',
		color: colors.lightBlack,
	},
	swipeableContainer: {
		width: '100%',
	},
	swipeableChildContainer: {
		width: '100%',
	},
})

export default styles;
