import * as React from 'react'
import {useEffect, useState} from 'react'
import {View, FlatList} from 'react-native'
import {ColumnPreview} from '../../common'
import {IconTextInput, Loader} from "../../ui"
import {columnsOperations} from "../../state/ducks/columns";
import styles from "./Desk.styles";
import {useAppDispatch, useAppSelector} from "../../state/store";


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
						<IconTextInput
							underlineColorAndroid="transparent"
							placeholder="Add a column..."
							inputValue={inputValue}
							onBlur={() => dispatch(columnsOperations.stopAddColumn())}
							onChangeText={(text) => setInputValue(text)}
							onSubmitEditing={AddColumn}
							autoFocus={true}
						/>
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


