import {StyleSheet} from 'react-native';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: 'center',
		backgroundColor: colors.beige,
		borderRadius: 10,
		marginVertical: 10,
		padding: 10,
		width: 210,
	},
	buttonText: {
		color: colors.white,
		fontSize: 17,
		lineHeight: 20,
	}
});

export default styles;
