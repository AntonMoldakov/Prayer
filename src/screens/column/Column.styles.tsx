import {StyleSheet} from 'react-native';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: colors.white
	},
	tab: {
		flexDirection: 'row-reverse'
	},
	tabText: {
		fontFamily: 'SF UI Text',
		fontSize: 13,
		lineHeight: 16,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	},
	indicator: {
		backgroundColor: colors.lightBlue
	},
	bubble: {
		display: 'flex',
		height: 16,
		width: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.vinous,
		borderRadius: 10,
	},
	bubbleText: {
		fontFamily: 'SF UI Text',
		fontSize: 9,
		color: colors.white,
	}
})

export default styles;
