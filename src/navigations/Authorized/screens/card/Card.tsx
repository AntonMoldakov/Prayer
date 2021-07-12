import * as React from "react";
import {View, ScrollView, Text, Image} from 'react-native'
import {useEffect, useMemo, useState} from "react";
import styles from "./Card.styles";
import {ICard} from "interface";
import {useAppDispatch} from "/state";
import {IconButton, Loader} from "ui";
import {getComments} from "state/comments/actions";
import {CardScreenNavigationProps} from "../../Authorized";
import {Comments} from "components";
import {useSelector} from "react-redux";
import {selectCards} from "state/cards/selectors";
import {PlusIcon} from "assets/icons/components";
import colors from "styles/colors";

const Card = (props: CardScreenNavigationProps) => {
	const {cardId} = props.route.params;
	const [loading, setLoading] = useState(true)
	const dispatch = useAppDispatch();

	const cards = useSelector(selectCards)

	const [card] = useMemo(
		() => cards.filter((item: ICard) => item.id === cardId),
		[cards, cardId],
	);
	useEffect(() => {
		dispatch(getComments())
		setLoading(false)
	}, [dispatch]);

	return (
		<ScrollView>
			{loading ? <Loader/> :
				<View style={styles.container}>
					<View style={styles.title}>
						<Text style={styles.titleText}>{card.title}</Text>
					</View>

					<View style={styles.prayed}>
						<View style={styles.prayedStatus}/>
						<Text style={styles.prayedText}>Last prayed 8 min ago</Text>
					</View>

					<View style={styles.description}>
						<View style={styles.cell}>
							<Text style={styles.date}>July 25 2017</Text>
							<Text style={styles.text}>Date Added</Text>
							<Text style={styles.footerText}>Opened for 4 days</Text>
						</View>

						<View style={styles.cell}>
							<Text style={styles.number}>123</Text>
							<Text style={styles.text}>Times Prayed Total</Text>
						</View>

						<View style={styles.cell}>
							<Text style={styles.number}>60</Text>
							<Text style={styles.text}>Times Prayed by Me</Text>
						</View>

						<View style={styles.cell}>
							<Text style={styles.number}>63</Text>
							<Text style={styles.text}>Times Prayed by Others</Text>
						</View>
					</View>

					<View style={styles.members}>
						<Text style={styles.blockTitle}>MEMBERS</Text>
						<View style={styles.block}>
							<Image
								source={require('assets/img/1.png')}
								style={styles.avatar}
							/>
							<Image
								source={require('assets/img/2.png')}
								style={styles.avatar}
							/>
							<IconButton>
								<PlusIcon
									size={18}
									color={colors.white}
									style={styles.button}
								/>
							</IconButton>
						</View>
					</View>
					<Comments cardId={card.id}/>
				</View>
			}
		</ScrollView>
	)
}

export default Card
