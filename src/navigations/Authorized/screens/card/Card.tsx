import * as React from "react";
import {View, ScrollView, Text, Image, TextInput} from 'react-native'
import {useEffect, useState} from "react";
import styles from "./Card.styles";
import {useAppDispatch} from "/state";
import {IconButton, Loader} from "ui";
import {addComment, getComments} from "state/comments/actions";
import {CardScreenNavigationProps} from "../../Authorized";
import {Comments} from "components";
import {useSelector} from "react-redux";
import {selectCardById} from "state/cards/selectors";
import {MessageIcon, PlusIcon} from "assets/icons/components";
import colors from "styles/colors";
import {selectCommentsIsLoading} from "state/comments/selectors";
import {selectUser} from "state/auth/selectors";

const Card = (props: CardScreenNavigationProps) => {
	const {cardId} = props.route.params;
	const dispatch = useAppDispatch();

	const card = useSelector(selectCardById(cardId))
	const isLoading = useSelector(selectCommentsIsLoading)

	useEffect(() => {
		dispatch(getComments())
	}, [dispatch]);

	const [commentValue, setCommentValue] = useState('');
	const {name} = useSelector(selectUser)
	const handleSubmit = () => {
		if (commentValue) {
			dispatch(addComment({cardId, body: commentValue, name}));
			setCommentValue('');
		}
	};

	return (
		<>
			<ScrollView style={{flex: 1}}>
				{isLoading && <Loader/>}
				<View style={styles.container}>
					<>
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

							<View style={[styles.cell, styles.borderBottom]}>
								<Text style={styles.number}>60</Text>
								<Text style={styles.text}>Times Prayed by Me</Text>
							</View>

							<View style={[styles.cell, styles.borderBottom]}>
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
					</>
					<Comments cardId={card.id}/>
				</View>
			</ScrollView>
			<View style={styles.inputSection}>
				<MessageIcon
					size={22}
					color="#BFB393"
					style={styles.inputIcon}
				/>
				<TextInput
					maxLength={70}
					underlineColorAndroid="transparent"
					placeholder="Add a comment..."
					style={[styles.input]}
					onChangeText={(text) => setCommentValue(text)}
					value={commentValue}
					onSubmitEditing={handleSubmit}
				/>
			</View>
		</>
	)
}

export default Card
