import * as React from "react";
import SocialSidebar from "../../stories/screens/SocialSidebar";
export interface Props {
	navigation: any;
}
export interface State {}
export default class SocialSidebarContainer extends React.Component<Props, State> {
	render() {
		return <SocialSidebar navigation={this.props.navigation} />;
	}
}
