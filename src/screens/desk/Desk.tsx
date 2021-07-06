import * as React from 'react'
import {useEffect, useState} from 'react'
import Plus from 'react-native-vector-icons/AntDesign'
import {View, FlatList, TextInput} from 'react-native'
import {ColumnPreview} from '../../common'
import {Loader} from "../../ui"
import {useAppDispatch, useAppSelector} from "../../hooks"
import {columnsOperations} from "../../state/ducks/columns";
import styles from "./Desk.styles";


const Desk = () => {
	const [inputValue, setInputValue] = useState('')
	const dispatch = useAppDispatch()
	useEffect(() => dispatch(columnsOperations.getColumns()), [dispatch])

	const [columns, addMode, loadingMode] = useAppSelector(
		(state) => {
			const {column, session} = state
			return [column.columns, column.addMode, session.loadingMode]
		})

	const AddColumn = () => {
		if (inputValue) {
			dispatch(columnsOperations.addColumn(inputValue))
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
								autoFocus={true}
								onBlur={() => dispatch(columnsOperations.stopAddColumn())}
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


