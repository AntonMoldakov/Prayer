import * as React from 'react'
import {useEffect, useState} from 'react'
import {View, FlatList} from 'react-native'
import {IconTextInput, Loader} from "ui"
import styles from "./Desk.styles";
import {useAppDispatch, useAppSelector} from "state";
import {ColumnPreview} from "components";
import {addColumn, getColumns, stopAddColumn} from "state/columns/actions";
import {DeskScreenNavigationProps} from "../../Authorized";


const Desk = (props: DeskScreenNavigationProps) => {
	const [inputValue, setInputValue] = useState('')
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getColumns())
	}, [dispatch]);

	const [columns, addMode, loadingMode] = useAppSelector(
		(state) => {
			const {column, session} = state
			return [column.columns, column.addMode, session.loadingMode]
		})

	const AddColumn = () => {
		if (inputValue) {
			dispatch(addColumn(inputValue))
			dispatch(stopAddColumn())
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
							onBlur={() => dispatch(stopAddColumn())}
							onChangeText={(text) => setInputValue(text)}
							onSubmitEditing={AddColumn}
							autoFocus={true}
						/>
					}
					<FlatList
						style={styles.listStyle}
						data={columns}
						renderItem={({item}) => (
							<ColumnPreview {...props} title={item.title} id={item.id}/>
						)}
						keyExtractor={(item) => `${item.id}`}
					/>
				</>
			}
		</View>
	)
}

export default Desk


