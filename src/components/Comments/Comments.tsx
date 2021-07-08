import * as React from 'react';
import {useMemo, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Message from 'react-native-vector-icons/Feather';
import {addComment} from "state/comments/actions";
import {useAppDispatch, useAppSelector} from "state";
import styles from "./Comments.styles";
import {Comment} from "components";

interface IProps {
	cardId: number
}

const Comments = ({cardId}: IProps) => {
	const dispatch = useAppDispatch();
	const [commentValue, setCommentValue] = useState('');

	const [comments, name] = useAppSelector(
		(state) => {
			const {comment, auth} = state
			return [comment.comments, auth.user.name]
		})


	const cardComments = useMemo(
		() => comments.filter((item) => item.prayerId === cardId),
		[comments, cardId],
	);

	const onAddComment = () => {
		if (commentValue) {
			dispatch(addComment(cardId, commentValue, name));
			setCommentValue('');
		}
	};

	return (
		<View style={styles.container}>
			<>
				<Text style={styles.title}>COMMENTS</Text>
				{cardComments.map((item) => (
					<Comment key={item.id} comment={item}/>
				))}
				<View style={styles.inputSection}>
					<Message
						name="message-square"
						size={25}
						color="#BFB393"
						style={styles.inputIcon}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						placeholder="Add a comment..."
						style={[styles.input]}
						onChangeText={(text) => setCommentValue(text)}
						value={commentValue}
						onSubmitEditing={onAddComment}
					/>
				</View>
			</>
		</View>
	);
};

export default Comments;
