import React from "react";
import Svg, {Rect} from "react-native-svg";
import {StyleProp, View, ViewStyle} from "react-native";

interface CheckboxOffProps {
	size?: number,
	style?: StyleProp<ViewStyle>
}

const CheckboxOff = ({size = 22, style}: CheckboxOffProps) => {
	return (
		<View style={style}>
			<Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
				<Rect x="0.5" y="0.5" width="21" height="21" rx="3.5" stroke="#514D47"/>
			</Svg>

		</View>

	)
}

export default CheckboxOff
