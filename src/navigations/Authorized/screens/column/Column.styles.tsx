import {StyleSheet} from 'react-native';
import colors from "styles/colors";

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: colors.white
	},
	tab: {
		flexDirection: 'row-reverse'
	},
	tabText: {
		fontFamily: 'SFUIText-Regular',
		fontSize: 13,
		lineHeight: 16,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	},
	indicator: {
		backgroundColor: colors.lightBlue
	},
	bubble: {
		marginBottom: 5,
		display: 'flex',
		height: 16,
		width: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.vinous,
		borderRadius: 50,
	},
	bubbleText: {
		fontFamily: 'SFUIText-Regular',
		fontSize: 9,
		color: colors.white,
	}
})

export default styles;
