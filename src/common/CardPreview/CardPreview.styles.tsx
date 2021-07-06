import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	cardPreview: {
		width: '90%',
		height: 66,
		flexDirection: 'row',
		borderBottomColor: '#E5E5E5',
		borderBottomWidth: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		overflow: 'hidden',
	},
	swipeableContainer: {
		width: '100%',
	},
	swipeableChildContainer: {
		width: '100%',
	},
	cardStatus: {
		width: 3,
		height: 22,
		backgroundColor: '#AC5253',
	},
	cardText: {
		color: '#514D47',
		width: '60%',
		fontSize: 17,
		lineHeight: 20,
	},
	cardTextChecked: {
		color: '#514D47',
		width: '60%',
		fontSize: 17,
		lineHeight: 20,
		textDecorationLine: 'line-through',
	},
	cardIcons: {
		width: '30%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginLeft: 20,
		marginRight: 10,
	},
	cardLink: {
		width: '90%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	icon: {
		marginLeft: 8,
	},
	DeleteText: {
		fontFamily: 'SF UI Text',
		fontSize: 17,
		color: '#FFF',
	},
	delete: {
		width: '30%',
		height: '100%',
		paddingVertical: 20,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#AC5253',
		marginBottom: 10,
	},
});

export default styles;
