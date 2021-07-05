import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15
	},
	input: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#E5E5E5',
		borderRadius: 10,
		height: 50,
		marginTop: 16,
		paddingHorizontal: 10,
		fontSize: 17,
		lineHeight: 20,
	},
	buttonContainer: {
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
