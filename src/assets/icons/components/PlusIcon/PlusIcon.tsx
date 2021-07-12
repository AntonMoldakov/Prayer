import React from "react";
import colors from "styles/colors";
import Svg, {Path} from "react-native-svg";
import {StyleProp, View, ViewStyle} from "react-native";

interface PlusProps {
	color?: string,
	size?: number,
	style?: StyleProp<ViewStyle>
}

const PlusIcon = ({color = colors.lightBlue, size = 24, style}: PlusProps) => {
	return (
		<View style={style}>
			<Svg width={size} height={size} viewBox="0 0 22 22" fill={color}>
				<Path
					d="M10 21C10 21.5523 10.4477 22 11 22C11.5523 22 12 21.5523 12 21V12H21C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10H12V1C12 0.447716 11.5523 0 11 0C10.4477 0 10 0.447716 10 1V10H1C0.447716 10 0 10.4477 0 11C0 11.5523 0.447716 12 1 12H10V21Z"
					fill={color}/>
			</Svg>
		</View>

	)
}

export default PlusIcon
