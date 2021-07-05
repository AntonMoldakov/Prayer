import * as React from 'react'
import {useEffect, useState} from 'react'
import Plus from 'react-native-vector-icons/AntDesign'
import {
	View,
	FlatList,
	TextInput,
	Alert,
	StyleSheet
} from 'react-native'
import {ColumnPreview} from '../../common'
import {Loader} from "../../ui"
import {useAppDispatch, useAppSelector} from "../../hooks"
import {columnsOperations} from "../../state/ducks/columns";


const Desk = () => {
	const [inputValue, setInputValue] = useState('')
	const dispatch = useAppDispatch()

	const [columns, addMode, loadingMode] = useAppSelector(
		(state) => {
			const {column, session} = state
			return [column.columns, column.addMode, session.loadingMode]
		})

	// @ts-ignore
	useEffect(() => dispatch(columnsOperations.getColumns()), [])
	const AddColumn = () => {
		if (inputValue) {
			Alert.alert('create desk: ' + inputValue)
			// @ts-ignore
			dispatch(columnsOperations.addColumn(inputValue))
			// @ts-ignore
			dispatch(columnsOperations.stopAddColumn())
			setInputValue('')
		}
	}
	return (
		<View style={styles.container}>
			{loadingMode ? <Loader/> :
				<>
					{
						addMode &&
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
					}
					<FlatList
						style={styles.listStyle}
						data={columns}
						renderItem={({item}) => (
							<ColumnPreview title={item.title} id={item.id}/>
						)}
						keyExtractor={(item) => `${item.id}`}
					/>
				</>
			}
		</View>
	)
}

export default Desk

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15
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
