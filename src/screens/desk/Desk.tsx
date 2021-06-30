import React, {useState} from 'react'
import Plus from 'react-native-vector-icons/AntDesign'
import {
	View,
	FlatList,
	TextInput,
	Alert,
	StyleSheet
} from 'react-native'

import {ColumnPreview} from '../../components'


const Desk = () => {
	const [inputValue, setInputValue] = useState('')

	const desk = [
		{id: 120, title: 'Desk1'},
		{id: 131, title: 'Desk2'},
		{id: 30, title: 'Desk3'},
		{id: 34, title: 'Desk4'}
	]
	const AddColumn = () => {
		if (inputValue) {
			Alert.alert('create desk: ' + inputValue)
			setInputValue('')
		}
	}

	return (
		<View style={styles.container}>
			<>
				<FlatList
					style={styles.listStyle}
					data={desk}
					renderItem={({item}) => (
						<ColumnPreview title={item.title} id={item.id}/>
					)}
					keyExtractor={(item) => `${item.id}`}
				/>
				<View style={styles.inputSection}>
					<Plus
						name="plus"
						size={28}
						color="#72A8BC"
						style={styles.inputIcon}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						placeholder="Add a column..."
						onChangeText={(text) => setInputValue(text)}
						value={inputValue}
						style={styles.input}
						onSubmitEditing={AddColumn}
					/>
				</View>
			</>
		</View>
	)
}

export default Desk

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		backgroundColor: '#fff'
	},
	listStyle: {
		width: '100%',
		marginTop: 15,
	},
	inputSection: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#E5E5E5',
		borderRadius: 4,
		height: 50,
		marginTop: 16,
		paddingRight: 10,
	},
	inputIcon: {
		paddingLeft: 10,
	},
	input: {
		width: '90%',
		height: '100%',
		paddingLeft: 10,
		fontSize: 17,
		lineHeight: 20,
	},
})
