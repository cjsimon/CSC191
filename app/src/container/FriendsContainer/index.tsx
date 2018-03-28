import * as React from "react";
import Friends from "../../stories/screens/Friends";
export interface Props {
	navigation: any;
}
export interface State {}
export default class FriendsContainer extends React.Component<Props, State> {
	render() {
		return <Friends navigation={this.props.navigation} />;
	}
}
