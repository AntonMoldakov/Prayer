import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	tabText: {
		fontFamily: 'SF UI Text',
		fontSize: 13,
		lineHeight: 16,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	},
	bubble: {
		display: 'flex',
		height: 16,
		width: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#AC5253',
		borderRadius: 10,
	},
	bubbleText: {
		fontFamily: 'SF UI Text',
		fontSize: 9,
		color: '#fff',
	}
})

export default styles;
