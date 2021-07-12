import * as React from "react";
import {useState, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import styles from './Subscribed.styles';
import {BrownButton} from "ui";
import {CardPreview} from "@components/index";
import {ColumnScreenNavigationProps} from "../../../../Authorized";
import {useSelector} from "react-redux";
import {selectCardsForColumn} from "state/cards/selectors";

interface SubscribedProps extends ColumnScreenNavigationProps {
	columnId: number
}

const Subscribed = ({columnId, ...props}: SubscribedProps) => {
	const [isShowAnswered, setIsShowAnswered] = useState(false);

	const cards = useSelector(selectCardsForColumn(columnId))

	const uncheckedCards = useMemo(
		() => cards.filter((item) => item.checked !== true),
		[cards])
	const checkedCards = useMemo(
		() => cards.filter((item) => item.checked === true),
		[cards])

	return (
		<View style={styles.container}>
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
		</View>
	);
};

export default Subscribed;
