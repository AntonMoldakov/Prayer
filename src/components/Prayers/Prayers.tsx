import * as React from 'react'
import {useState, useMemo} from 'react'
import {View, FlatList} from 'react-native'
import styles from './Prayers.styles'
import {BrownButton, IconTextInput} from "ui"
import {useAppDispatch, useAppSelector} from "state"
import {CardPreview} from "../CardPreview";
import {addCard} from "state/cards/actions";
import {stopAddColumn} from "state/columns/actions";
import {ColumnScreenNavigationProps} from "navigations/Authorized/Authorized";

interface IProps extends ColumnScreenNavigationProps{
	columnId: number
}

const PrayersList = ({columnId, ...props}: IProps) => {
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
			dispatch(addCard(columnId, inputValue))
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
					onSubmitEditing={AddCard}/>
				<FlatList
					style={styles.cardList}
					contentContainerStyle={styles.cardListContainer}
					data={uncheckedCards}
					renderItem={({item}) => <CardPreview {...props} item={item}/>}
					keyExtractor={(item) => 'key' + item.id}
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
					renderItem={({item}) => <CardPreview {...props} item={item}/>}
					keyExtractor={(item) => 'key' + item.id}
				/>
				}
			</>
		</View>
	)
}

export default PrayersList
