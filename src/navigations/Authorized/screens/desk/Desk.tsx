import * as React from 'react'
import {useEffect, useState} from 'react'
import {View, FlatList} from 'react-native'
import {BrownButton, IconTextInput, Loader} from "ui"
import styles from "./Desk.styles";
import {useAppDispatch} from "/state";
import {ColumnPreview} from "components";
import {addColumn, getColumns, stopAddColumn} from "state/columns/actions";
import {DeskScreenNavigationProps} from "../../Authorized";
import {useSelector} from "react-redux";
import {selectColumns, selectColumnsAddMode, selectColumnsIsLoading} from "state/columns/selectors";
import {signOut} from "state/auth/actions";


const Desk = (props: DeskScreenNavigationProps) => {
	const [inputValue, setInputValue] = useState('')
	const dispatch = useAppDispatch()
	const columns = useSelector(selectColumns)
	const addMode = useSelector(selectColumnsAddMode)
	const isLoading = useSelector(selectColumnsIsLoading)

	useEffect(() => {
		dispatch(getColumns())
	}, [dispatch]);


	const handleSubmit = () => {
		if (inputValue) {
			dispatch(addColumn({title: inputValue}))
			dispatch(stopAddColumn())
			setInputValue('')
		}
	}
	return (
		<View style={styles.container}>
			{isLoading ? <Loader/> :
				<>
					{
						addMode &&
						<IconTextInput
							maxLength={30}
							underlineColorAndroid="transparent"
							placeholder="Add a column..."
							inputValue={inputValue}
							onBlur={() => dispatch(stopAddColumn())}
							onChangeText={(text) => setInputValue(text)}
							onSubmitEditing={handleSubmit}
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
			<BrownButton onPress={() => dispatch(signOut)} text={'Sign Out'}/>
		</View>
	)
}

export default Desk


