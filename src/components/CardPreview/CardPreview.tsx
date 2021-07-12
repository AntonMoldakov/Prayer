import * as React from 'react'
import {TouchableOpacity, Text, View} from 'react-native'
import {Swipeable} from "react-native-gesture-handler";
import styles from "./CardPreview.styles";
import {ICard} from "interface";
import {useAppDispatch} from '/state';
import {DeleteButton, Checkbox} from 'ui'
import colors from "styles/colors";
import {deleteCard, checkedCard} from "state/cards/actions";
import {ColumnScreenNavigationProps} from "navigations/Authorized/Authorized";
import {UserIcon} from "assets/icons/components/UserIcon";
import {HandsIcon} from "assets/icons/components";

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
					toggle={item.checked}
					onPress={() => dispatch(checkedCard({id: item.id, checked: item.checked}))}
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
						<View style={styles.cardIconsItem}>
							<UserIcon size={22} color={colors.lightBlue} style={styles.icon}/>
							<Text style={styles.subscribedText}>
								{item.subscribed? item.subscribed: 4}
							</Text>
						</View>
						<View style={[styles.cardIconsItem, styles.cardIconsItemMargin]}>
							<HandsIcon size={29} color={colors.lightBlue} style={styles.icon}/>
							<Text style={styles.totalCountText}>
								{(item.prayedByMe && item.prayedByOthers)?
								(item.prayedByMe + item.prayedByOthers):
									12}
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		</Swipeable>

	);
};

export default CardPreview;


