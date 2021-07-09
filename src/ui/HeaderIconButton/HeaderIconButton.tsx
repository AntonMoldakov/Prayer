import * as React from "react";
import {TouchableOpacity, TouchableOpacityProps} from 'react-native'

interface HeaderIconButtonProps extends TouchableOpacityProps {
	children: React.ReactNode
}

const HeaderIconButton = (props: HeaderIconButtonProps) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			{props.children}
		</TouchableOpacity>
	)
}

export default HeaderIconButton
