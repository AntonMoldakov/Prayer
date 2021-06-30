import React, {useState} from 'react'
import Plus from 'react-native-vector-icons/AntDesign'
import {
	View,
	FlatList,
	TextInput,
	Alert
} from 'react-native'

import {ColumnPreview} from '../../components'


const Desk = () => {
	const [inputValue, setInputValue] = useState('')

	const columns = [
		{id: 120, title: 'Desk1'},
		{id: 131, title: 'Desk2'},
		{id: 30, title: 'Desk3'}

	]

	const AddColumn = () => {
		if (inputValue) {
			Alert.alert('create desk: ' + inputValue)
			setInputValue('')
		}
	}

	return (
		<View>
			<>
				<FlatList
					data={columns}
					renderItem={({item}) => (
						<ColumnPreview title={item.title} id={item.id}/>
					)}
					keyExtractor={(item) => `${item.id}`}
				/>
				<View>
					<Plus
						name="plus"
						size={28}
						color="#72A8BC"
					/>
					<TextInput
						underlineColorAndroid="transparent"
						placeholder="Add a column..."
						onChangeText={(text) => setInputValue(text)}
						value={inputValue}
						onSubmitEditing={AddColumn}
					/>
				</View>
			</>
		</View>
	)
}

export default Desk
