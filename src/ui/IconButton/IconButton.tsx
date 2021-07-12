import * as React from "react";
import {TouchableOpacity, TouchableOpacityProps} from 'react-native'
import {ReactNode} from "react";

interface IconButtonProps extends TouchableOpacityProps {
	children: ReactNode
}

const IconButton = (props: IconButtonProps) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			{props.children}
		</TouchableOpacity>
	)
}

export default IconButton
