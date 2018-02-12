import * as React from "react";
import MyProfile from "../../stories/screens/MyProfile";
export interface Props {
	navigation: any;
}
export interface State {}
export default class MyProfileContainer extends React.Component<Props, State> {
	render() {
		return <MyProfile navigation={this.props.navigation} />;
	}
}
