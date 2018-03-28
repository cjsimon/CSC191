import * as React from "react";
import ProfileVis from "../../stories/screens/ProfileVis";
export interface Props {
	navigation: any;
}
export interface State {}
export default class ProfileVisContainer extends React.Component<Props, State> {
	render() {
		return <ProfileVis navigation={this.props.navigation} />;
	}
}
