import * as React from "react";
import {useState, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import styles from './Subscribed.styles';
import {BrownButton} from "ui";
import {useAppSelector} from "state";
import {CardPreview} from "@components/index";
import {ColumnScreenNavigationProps} from "../../../../Authorized";

interface SubscribedProps extends ColumnScreenNavigationProps {
	columnId: number
}

const Subscribed = ({columnId, ...props}: SubscribedProps) => {
	const [isShowAnswered, setIsShowAnswered] = useState(false);

	const [cards] = useAppSelector(
		(state) => {
			const {card} = state
			return [card.cards]
		})

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
		</View>
	);
};

export default Subscribed;
