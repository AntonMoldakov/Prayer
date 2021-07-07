import * as React from 'react'
import {useState, useMemo} from 'react'
import {View, FlatList} from 'react-native'
import styles from './Prayers.styles'
import {cardsOperations} from "../../state/ducks/cards"
import {BrownButton, IconTextInput} from "../../ui"
import {CardPreview} from "../../common"
import {useAppDispatch, useAppSelector} from "../../state/store"
import {columnsOperations} from "../../state/ducks/columns"

interface IProps {
	columnId: number
}

const PrayersList = ({columnId}: IProps) => {
	const [inputValue, setInputValue] = useState('')
	const [isShowAnswered, setIsShowAnswered] = useState(false)
	const dispatch = useAppDispatch()

	const [cards] = useAppSelector(
		(state) => {
			const {card} = state
			return [card.cards]
		})

	const AddCard = () => {
		if (inputValue) {
			dispatch(cardsOperations.addCard(columnId, inputValue))
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
					onBlur={() => dispatch(columnsOperations.stopAddColumn())}
					onChangeText={(text) => setInputValue(text)}
					onSubmitEditing={AddCard}/>
				<FlatList
					style={styles.cardList}
					contentContainerStyle={styles.cardListContainer}
					data={uncheckedCards}
					renderItem={({item}) => <CardPreview item={item}/>}
					keyExtractor={(item) => item.id}
				/>
				<BrownButton
					text={isShowAnswered ? 'Hide Answered Prayers' : 'Show Answered Prayers'}
					action={() => setIsShowAnswered(!isShowAnswered)}
				/>
				{isShowAnswered &&
				<FlatList
					style={styles.cardList}
					contentContainerStyle={styles.cardListContainer}
					data={checkedCards}
					renderItem={({item}) => <CardPreview item={item}/>}
					keyExtractor={(item) => item.id}
				/>
				}
			</>
		</View>
	)
}

export default PrayersList
