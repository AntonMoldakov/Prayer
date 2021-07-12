import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
		fontFamily: 'SFUIText-Regular',
		flex: 1,
		paddingHorizontal: 15
	},
	buttonContainer: {
		alignItems: 'center',
		backgroundColor: '#BFB393',
		borderRadius: 10,
		marginTop: 16,
		padding: 10,
	},
	buttonText: {
		fontFamily: 'SFUIText-Regular',
		color: '#fff',
		fontSize: 17,
		lineHeight: 20,
	},
	error: {
		fontFamily: 'SFUIText-Bold',
		marginLeft: 10,
		color: 'tomato',
	}
});

export default styles;
