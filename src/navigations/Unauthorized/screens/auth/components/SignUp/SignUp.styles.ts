import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15
	},
	buttonContainer: {
		fontFamily: 'SFUIText-Regular',
		alignItems: 'center',
		backgroundColor: '#BFB393',
		borderRadius: 10,
		marginTop: 16,
		padding: 10,
	},
	buttonText: {
		color: '#fff',
		fontSize: 17,
		lineHeight: 20,
	},
	error: {
		marginLeft: 10,
		color: 'tomato',
	}
});

export default styles;
