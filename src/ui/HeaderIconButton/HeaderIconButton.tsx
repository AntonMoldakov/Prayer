import * as React from "react";
import {TouchableOpacity, TouchableOpacityProps} from 'react-native'

interface HeaderIconButtonProps extends TouchableOpacityProps {
	children: React.ReactNode
}

const HeaderIconButton = ({style, ...props}: HeaderIconButtonProps) => {
	return (
		<TouchableOpacity style={style} onPress={props.onPress}>
			{props.children}
		</TouchableOpacity>
	)
}

export default HeaderIconButton
