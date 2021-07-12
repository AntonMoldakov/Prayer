import React from "react";
import Svg, {Path, Rect} from "react-native-svg";
import {StyleProp, View, ViewStyle} from "react-native";

interface CheckboxOnProps {
	size?: number,
	style?: StyleProp<ViewStyle>
}

const CheckboxOn = ({size = 22, style}: CheckboxOnProps) => {
	return (
		<View style={style}>
			<Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
				<Rect x="0.5" y="0.5" width="21" height="21" rx="3.5" stroke="#424E75"/>
				<Path d="M17 5L8.75 16L5 11" stroke="#514D47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</Svg>

		</View>

	)
}

export default CheckboxOn
