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
import {selectCards} from "state/cards/selectors";

interface PrayersListProps extends ColumnScreenNavigationProps {
	columnId: number
}

const PrayersList = ({columnId, ...props}: PrayersListProps) => {
	const [inputValue, setInputValue] = useState('')
	const [isShowAnswered, setIsShowAnswered] = useState(false)
	const dispatch = useAppDispatch()

	const cards = useSelector(selectCards)

	const handleSubmit = () => {
		if (inputValue) {
			dispatch(addCard({columnId, title: inputValue}))
			setInputValue('')
		}
	}

	const filteredCards = useMemo(
		() => cards.filter(card => card.columnId === columnId),
		[cards, columnId])

	const uncheckedCards = useMemo(
		() => filteredCards.filter((item) => item.checked !== true),
		[filteredCards])
	const checkedCards = useMemo(
		() => filteredCards.filter((item) => item.checked === true),
		[filteredCards])

	return (
		<View style={styles.container}>
				<>
					<IconTextInput
						underlineColorAndroid="transparent"
						placeholder="Add a prayer..."
						inputValue={inputValue}
						onBlur={() => dispatch(stopAddColumn())}
						onChangeText={(text) => setInputValue(text)}
						onSubmitEditing={handleSubmit}/>
					<FlatList
						style={styles.cardList}
						contentContainerStyle={styles.cardListContainer}
						data={uncheckedCards}
						renderItem={({item}) => <CardPreview {...props} item={item}/>}
						keyExtractor={(item) => 'key' + item.id}
					/>
					<BrownButton
						text={isShowAnswered ? 'Hide Answered Prayers' : 'Show Answered Prayers'}
						onPress={() => setIsShowAnswered(!isShowAnswered)}
					/>
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
