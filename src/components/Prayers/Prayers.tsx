import React, {useState, useMemo} from 'react';
import {View, TextInput, FlatList} from 'react-native';
import Plus from 'react-native-vector-icons/AntDesign';
import styles from './Prayers.styles';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {cardsOperations} from "../../state/ducks/cards";
import {Loader} from "../../ui/Loader";
import {BrownButton} from "../../ui/BrownButton";
import {CardPreview} from "../../common";

const PrayersList = ({columnId}: { columnId: number }) => {
	const [inputValue, setInputValue] = useState('')
	const [isShowAnswered, setIsShowAnswered] = useState(false);
	const dispatch = useAppDispatch();

	const [cards, loadingMode] = useAppSelector(
		(state) => {
			const {card, session} = state
			return [card.cards, session.loadingMode]
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
			{loadingMode ? <Loader/> :
				<>
					<View style={styles.inputSection}>
						<Plus
							name="plus"
							size={28}
							color="#72A8BC"
							style={styles.inputIcon}
						/>
						<TextInput
							underlineColorAndroid="transparent"
							placeholder="Add a prayer..."
							style={styles.input}
							onChangeText={(text) => setInputValue(text)}
							value={inputValue}
							onSubmitEditing={AddCard}
						/>
					</View>
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
			}
		</View>
	);
};

export default PrayersList;
