import {StyleSheet} from 'react-native';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
	DeleteText: {
		fontFamily: 'SF UI Text',
		fontSize: 17,
		color: colors.white,
	},
	delete: {
		width: '30%',
		height: '100%',
		paddingVertical: 20,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: colors.vinous,
		marginBottom: 10,
	},
});

export default styles;
