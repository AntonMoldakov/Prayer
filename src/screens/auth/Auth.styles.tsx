import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	tabBar: {
		flexDirection: 'row'
	},
	tabItem: {
		flex: 1,
		alignItems: 'center',
		padding: 16,
	},
	tabText: {
		fontFamily: 'SF UI Text',
		fontSize: 13,
		lineHeight: 16,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	}
})

export default styles;
