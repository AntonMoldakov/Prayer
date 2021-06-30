import React from "react";
import {SignIn, SignUp} from '../../components';
import {SceneMap, TabView} from "react-native-tab-view";
import {useWindowDimensions} from 'react-native';


const renderScene = SceneMap({
	SignIn: SignIn,
	SignUp: SignUp,
});

function Auth() {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{key: 'SignIn', title: 'Sign In'},
		{key: 'SignUp', title: 'Sign Up'},
	]);

	return (
		<TabView
			navigationState={{index, routes}}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{width: layout.width}}
		/>
	);
}

export default Auth;
