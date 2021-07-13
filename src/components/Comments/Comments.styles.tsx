import {StyleSheet} from 'react-native';
import colors from "styles/colors";


const styles = StyleSheet.create({
	container: {
		flex: 1,
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
});

export default styles;
