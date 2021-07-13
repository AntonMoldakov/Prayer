import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {Swipeable} from "react-native-gesture-handler";
import styles from './Comment.styles';
import {IComment} from "interface";
import {deleteComment} from "state/comments/actions";
import {DeleteButton} from "ui";

interface IProps {
	comment: IComment
}

const Comment = ({comment}: IProps) => {

	const renderRightActions = () => <DeleteButton onPress={deleteComment} id={comment.id}/>

	return (
		<Swipeable renderRightActions={renderRightActions}>
			<View style={styles.container}>
				<Image
					source={require('/assets/img/userAvatar.png')}
					style={styles.avatar}
				/>
				<View style={styles.data}>
					<View style={styles.titleSection}>
						<Text style={styles.titleName}>{comment.name ? comment.name : 'Name'}</Text>
						<Text style={styles.titleDate}>2 days ago</Text>
					</View>
					<Text style={styles.text}>{comment.body}</Text>
				</View>
			</View>
		</Swipeable>
	);
};

export default Comment;
