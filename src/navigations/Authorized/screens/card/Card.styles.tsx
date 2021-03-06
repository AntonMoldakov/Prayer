import {StyleSheet} from 'react-native';
import colors from "styles/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		justifyContent: 'flex-start',
	},
	title: {
		backgroundColor: colors.beige,
		paddingHorizontal: 15,
		paddingBottom: 23,

	},
	titleText: {
		fontFamily: 'SFUIText-Regular',
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
		fontFamily: 'SFUIText-Regular',
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
		borderTopWidth: 1,
		borderRightWidth: 1,
		borderColor: colors.lightGray,
		width: '50%',
	},
	borderBottom: {
		borderBottomWidth: 1,
		borderColor: colors.lightGray,
	},
	number: {
		fontFamily: 'SFUIText-Regular',
		fontSize: 32,
		lineHeight: 37,
		color: colors.beige,
	},
	date: {
		fontFamily: 'SFUIText-Regular',
		marginVertical: 10,
		fontSize: 22,
		lineHeight: 26,
		color: colors.beige,
	},
	text: {
		fontFamily: 'SFUIText-Regular',
		fontSize: 13,
		lineHeight: 15,
		color: colors.lightBlack,
	},
	footerText: {
		fontFamily: 'SFUIText-Regular',
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
		fontFamily: 'SFUIText-Regular',
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
	},
	button: {
		padding: 7,
		borderRadius: 50,
		backgroundColor: colors.beige
	},
	inputSection: {
		borderTopWidth: 1,
		borderColor: colors.lightGray,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
		height: 50,
		paddingRight: 10,
	},
	inputIcon: {
		paddingLeft: 10,
	},
	input: {
		fontFamily: 'SFUIText-Regular',
		width: '90%',
		paddingLeft: 10,
		fontSize: 17,
		lineHeight: 20,
	}
})

export default styles;
