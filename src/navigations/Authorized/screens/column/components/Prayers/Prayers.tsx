import * as React from 'react'
import {useState, useMemo} from 'react'
import {View, FlatList} from 'react-native'
import styles from './Prayers.styles'
import {BrownButton, IconTextInput} from "ui"
import {useAppDispatch} from "/state"
import {CardPreview} from "@components/CardPreview";
import {addCard} from "state/cards/actions";
import {stopAddColumn} from "state/columns/actions";
import {ColumnScreenNavigationProps} from "navigations/Authorized/Authorized";
import {useSelector} from "react-redux";
import {selectCardsForColumn} from "state/cards/selectors";

interface PrayersListProps extends ColumnScreenNavigationProps {
	columnId: number
}

const PrayersList = ({columnId, ...props}: PrayersListProps) => {
	const [inputValue, setInputValue] = useState('')
	const [isShowAnswered, setIsShowAnswered] = useState(false)
	const dispatch = useAppDispatch()


	const handleSubmit = () => {
		if (inputValue) {
			dispatch(addCard({columnId, title: inputValue}))
			setInputValue('')
		}
	}

	const cards = useSelector(selectCardsForColumn(columnId))

	const uncheckedCards = useMemo(
		() => cards.filter((item) => item.checked !== true),
		[cards])

	const checkedCards = useMemo(
		() => cards.filter((item) => item.checked === true),
		[cards])

	return (
		<View style={styles.container}>
			<>
				<View style={styles.input}>
					<IconTextInput
						maxLength={70}
						underlineColorAndroid="transparent"
						placeholder="Add a prayer..."
						inputValue={inputValue}
						onBlur={() => dispatch(stopAddColumn())}
						onChangeText={(text) => setInputValue(text)}
						onSubmitEditing={handleSubmit}/>
				</View>
				<FlatList
					style={styles.cardList}
					contentContainerStyle={styles.cardListContainer}
					data={uncheckedCards}
					renderItem={({item}) => <CardPreview {...props} item={item}/>}
					keyExtractor={(item) => 'key' + item.id}
				/>
				{
					checkedCards.length > 0 &&
					<BrownButton
						text={isShowAnswered ? 'Hide Answered Prayers' : 'Show Answered Prayers'}
						onPress={() => setIsShowAnswered(!isShowAnswered)}
					/>
				}
				{isShowAnswered &&
				<FlatList
					style={styles.cardList}
					contentContainerStyle={styles.cardListContainer}
					data={checkedCards}
					renderItem={({item}) => <CardPreview {...props} item={item}/>}
					keyExtractor={(item) => 'key' + item.id}
				/>
				}
			</>
		</View>
	)
}

export default PrayersList
