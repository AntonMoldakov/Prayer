import {StyleSheet} from 'react-native';
import colors from "styles/colors";


const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginTop: 15,
	},
	title: {
		fontFamily: 'SFUIText-Regular',
		color: colors.lightBlue,
		fontSize: 13,
		lineHeight: 15,
		marginBottom: 15,
		paddingLeft: 15,
	},
	subTitle: {
		width: '100%',
		textAlign: 'center',
		color: colors.lightGray2,
	},
	inputSection: {
		borderTopWidth: 1,
		borderColor: colors.lightGray,
		width: '90%',
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
		height: '100%',
		paddingLeft: 10,
		fontSize: 17,
		lineHeight: 20,
	},
	cardList: {
		width: '100%',
	},
	loading: {
		marginTop: 20,
	},
});

export default styles;
