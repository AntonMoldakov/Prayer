import * as React from 'react';
import {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {addComment} from "state/comments/actions";
import {useAppDispatch} from "/state";
import styles from "./Comments.styles";
import {Comment} from "components";
import {useSelector} from "react-redux";
import {selectCommentsForCard} from "state/comments/selectors";
import {selectUser} from "state/auth/selectors";
import {MessageIcon} from "assets/icons/components";

interface CommentsProps {
	cardId: number
}

const Comments = ({cardId}: CommentsProps) => {
	const dispatch = useAppDispatch();
	const [commentValue, setCommentValue] = useState('');

	const cardComments = useSelector(selectCommentsForCard(cardId))
	const {name} = useSelector(selectUser)


	const handleSubmit = () => {
		if (commentValue) {
			dispatch(addComment({cardId, body: commentValue, name}));
			setCommentValue('');
		}
	};

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
		</View>
	);
};

export default Comments;
