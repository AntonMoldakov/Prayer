import {StyleSheet} from 'react-native';
import colors from "../../../../styles/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	title: {
		width: '100%',
		backgroundColor: colors.beige,
		paddingHorizontal: 15,
		paddingBottom: 23,

	},
	titleText: {
		color: colors.white,
		fontSize: 17,
		lineHeight: 27,
	},
	prayed: {
		alignItems: 'center',
		flexDirection: 'row',
		width: '100%',
		paddingHorizontal: 15,
		height: 50,
	},
	prayedStatus: {
		height: 22,
		width: 3,
		backgroundColor: colors.vinous,
	},
	prayedText: {
		fontSize: 17,
		lineHeight: 20,
		marginLeft: 10,
		color: colors.lightBlack
	},
	description: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%',
	},
	cell: {
		justifyContent: 'center',
		height: 108,
		paddingLeft: 15,
		borderWidth: 1,
		borderColor: colors.lightGray,
		width: '50%',
	},
	number: {
		fontSize: 32,
		lineHeight: 37,
		color: colors.beige,
	},
	date: {
		fontSize: 22,
		lineHeight: 26,
		color: colors.beige,
	},
	text: {
		fontSize: 13,
		lineHeight: 15,
		color: colors.lightBlack,
	},
	footerText: {
		fontSize: 13,
		lineHeight: 15,
		color: colors.lightBlue,
	},

	members: {
		paddingTop: 20,
		width: '100%',
		padding: 15,
	},
	blockTitle: {
		color: colors.lightBlue,
		fontSize: 13,
		lineHeight: 15,
		marginBottom: 15,
	},
	avatar: {
		borderRadius: 50,
		marginRight: 5,
	},
	block: {
		alignItems: 'center',
		flexDirection: 'row',
	}
})

export default styles;
