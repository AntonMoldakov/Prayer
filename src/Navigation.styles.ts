import {StyleSheet} from 'react-native';
import colors from "./styles/colors";

const styles = StyleSheet.create({
	deskScreenHeader: {
		borderBottomWidth: 1,
		borderColor: colors.lightGray
	},
	HeaderIcon: {
		marginRight: 10
	},
	card: {
		backgroundColor: colors.white
	},
	headerTitle: {
		color: colors.lightBlack,
		fontWeight: '500'
	},
	headerCard: {
		backgroundColor: colors.beige,
		borderBottomWidth: 0,
		elevation: 0,
		shadowOpacity: 0,
	}
})

export default styles;
