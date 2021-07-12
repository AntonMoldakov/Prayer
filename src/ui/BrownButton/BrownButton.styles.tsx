import {StyleSheet} from 'react-native';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: 'center',
		justifyContent: "center",
		backgroundColor: colors.beige,
		borderRadius: 20,
		marginVertical: 21,
		width: 210,
		height: 30,

	},
	buttonText: {
		color: colors.white,
		fontFamily: ' SF UI Text',
		fontSize: 12,
		lineHeight: 14,
		textTransform: 'uppercase',
		fontWeight: '700'
	}
});

export default styles;
