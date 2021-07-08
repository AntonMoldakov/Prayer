import * as React from "react";
import {TouchableOpacity} from 'react-native'

interface IProps {
	onPress?: () => void,
	children: React.ReactNode
}

const HeaderIconButton = (props: IProps) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			{props.children}
		</TouchableOpacity>
	)
}

export default HeaderIconButton
