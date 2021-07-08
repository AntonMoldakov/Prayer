import * as React from "react";
import {TouchableOpacity} from 'react-native'
import {Icon} from "react-native-vector-icons/Icon";

interface IProps {
	onPress?: () => void,
	children: Icon
}

const HeaderIconButton = (props: IProps) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			{props.children}
		</TouchableOpacity>
	)
}

export default HeaderIconButton
