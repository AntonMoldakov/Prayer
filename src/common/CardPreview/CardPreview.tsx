import * as React from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import {Swipeable} from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from "../../hooks";
import styles from "./CardPreview.styles";
import {ICard} from "../../interface";
import {cardsOperations} from "../../state/ducks/cards";
import {Checkbox} from 'react-native-paper';
import User from 'react-native-vector-icons/Feather';
import Hands from 'react-native-vector-icons/FontAwesome5';

interface IProps {
	item: ICard
}

const CardPreview = ({item}: IProps) => {
	const navigation = useNavigation();
	const dispatch = useAppDispatch()
	const renderRightActions = () => {
		return (
			<TouchableOpacity style={styles.delete}
			                  onPress={() => dispatch(cardsOperations.deleteCard(item.id))}>
				<Text style={styles.DeleteText}>Delete</Text>
			</TouchableOpacity>
		);
	};
	return (
		<Swipeable renderRightActions={renderRightActions}
		           containerStyle={styles.swipeableContainer}
		           childrenContainerStyle={styles.swipeableChildContainer}>
			<View style={styles.cardPreview}>
				<View style={styles.cardStatus}/>
				<Checkbox
					status={item.checked ? 'checked' : 'unchecked'}
					onPress={() => dispatch(cardsOperations.checkedCard(item.id, item.checked))}
					color="#514D47"
				/>

				<TouchableOpacity
					style={styles.cardLink}
					onPress={() => navigation.navigate('Card', {cardId: item.id})}>
					<Text
						style={item.checked ? styles.cardTextChecked : styles.cardText}
						numberOfLines={1}>
						{item.title}
					</Text>
					<View style={styles.cardIcons}>
						<User style={styles.icon} name="user" size={22} color="#72A8BC"/>
						<Text style={{color: '#514D47'}}>{item.subscribed}</Text>
						<Hands
							style={styles.icon}
							name="praying-hands"
							size={22}
							color="#72A8BC"
						/>
						<Text style={{color: '#514D47'}}>{item.prayedByMe + item.prayedByOthers}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</Swipeable>

	);
};

export default CardPreview;


