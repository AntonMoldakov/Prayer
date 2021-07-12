import * as React from "react";
import {TouchableOpacityProps} from 'react-native'
import {IconButton} from "ui";
import {CheckboxOff, CheckboxOn} from "assets/icons/components";

interface CheckboxProps extends TouchableOpacityProps {
	toggle: boolean,
}

const Checkbox = (props: CheckboxProps) => {
	return (
		<IconButton onPress={props.onPress}>
			{props.toggle ? <CheckboxOn/> : <CheckboxOff/>}
		</IconButton>
	)
}

export default Checkbox
