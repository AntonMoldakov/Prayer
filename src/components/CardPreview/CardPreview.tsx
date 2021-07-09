import * as React from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import {Swipeable} from "react-native-gesture-handler";
import styles from "./CardPreview.styles";
import {ICard} from "interface";
import {Checkbox} from 'react-native-paper';
import User from 'react-native-vector-icons/Feather';
import Hands from 'react-native-vector-icons/FontAwesome5';
import {useAppDispatch} from "state";
import {DeleteButton} from 'ui'
import colors from "styles/colors";
import {deleteCard, checkedCard} from "state/cards/actions";
import {ColumnScreenNavigationProps} from "navigations/Authorized/Authorized";

interface CardPreviewProps extends ColumnScreenNavigationProps {
	item: ICard
}

const CardPreview = ({item, navigation}: CardPreviewProps) => {
	const dispatch = useAppDispatch()
	const renderRightActions = () => <DeleteButton onPress={deleteCard} id={item.id}/>
	return (
		<Swipeable renderRightActions={renderRightActions}
		           containerStyle={styles.swipeableContainer}
		           childrenContainerStyle={styles.swipeableChildContainer}>
			<View style={styles.cardPreview}>
				<View style={styles.cardStatus}/>
				<Checkbox
					status={item.checked ? 'checked' : 'unchecked'}
					onPress={() => dispatch(checkedCard({id: item.id, checked: item.checked}))}
					color={colors.lightBlack}
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
						<User style={styles.icon} name="user" size={22} color={colors.lightBlue}/>
						<Text style={styles.subscribedText}>{item.subscribed}</Text>
						<Hands
							style={styles.icon}
							name="praying-hands"
							size={22}
							color={colors.lightBlue}
						/>
						<Text style={styles.totalCountText}>{item.prayedByMe + item.prayedByOthers}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</Swipeable>

	);
};

export default CardPreview;


