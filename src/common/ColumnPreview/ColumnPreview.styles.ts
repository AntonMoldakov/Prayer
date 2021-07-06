import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	item: {
		borderWidth: 1,
		borderColor: '#E5E5E5',
		backgroundColor: '#fff',
		borderRadius: 4,
		paddingHorizontal: 15,
		paddingVertical: 20,
		marginBottom: 10,
	},
	text: {
		fontFamily: 'SF UI Text',
		fontSize: 17,
		fontWeight: '700',
		lineHeight: 20,
		textAlign: 'left',
		color: '#514D47',
	},
	DeleteText: {
		fontFamily: 'SF UI Text',
		fontSize: 17,
		color: '#FFF',
	},
	delete: {
		width: '30%',
		paddingVertical: 20,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#AC5253',
		marginBottom: 10,
	},
	swipeableContainer: {
		width: '100%',
	},
	swipeableChildContainer: {
		width: '100%',
	},
})

export default styles;
