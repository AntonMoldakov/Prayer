import {StyleSheet} from 'react-native';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	cardPreview: {
		width: '90%',
		height: 66,
		flexDirection: 'row',
		borderBottomColor: colors.lightBlack,
		borderBottomWidth: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	cardList: {
		width: '100%',
		flexGrow: 0,
		flexShrink: 0,
	},
	cardListContainer: {
		width: '100%',
		alignItems: 'center',
	}
});

export default styles;
