import * as React from 'react';
import {View, Text} from 'react-native';
import styles from "./Comments.styles";
import {Comment} from "components";
import {useSelector} from "react-redux";
import {selectCommentsForCard} from "state/comments/selectors";

interface CommentsProps {
	cardId: number
}

const Comments = ({cardId}: CommentsProps) => {

	const cardComments = useSelector(selectCommentsForCard(cardId))

	return (
		<View style={styles.container}>
			<Text style={styles.title}>COMMENTS</Text>
			{
				(cardComments.length === 0) ?
					<Text style={styles.subTitle}>No comments</Text>
					:
					cardComments.map((item) => (
						<Comment key={item.id} comment={item}/>
					))
			}
		</View>
	)
};

export default Comments;
