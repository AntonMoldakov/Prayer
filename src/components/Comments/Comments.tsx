import * as React from 'react';
import {useMemo, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Message from 'react-native-vector-icons/Feather';
import {addComment} from "state/comments/actions";
import {useAppDispatch} from "/state";
import styles from "./Comments.styles";
import {Comment} from "components";
import {useSelector} from "react-redux";
import {selectComments} from "state/comments/selectors";
import {selectUser} from "state/auth/selectors";

interface CommentsProps {
	cardId: number
}

const Comments = ({cardId}: CommentsProps) => {
	const dispatch = useAppDispatch();
	const [commentValue, setCommentValue] = useState('');

	const comments = useSelector(selectComments)
	const {name} = useSelector(selectUser)


	const cardComments = useMemo(
		() => comments.filter((item) => item.prayerId === cardId),
		[comments, cardId],
	);

	const handleSubmit = () => {
		if (commentValue) {
			dispatch(addComment({cardId, body: commentValue, name}));
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
						onSubmitEditing={handleSubmit}
					/>
				</View>
			</>
		</View>
	);
};

export default Comments;
