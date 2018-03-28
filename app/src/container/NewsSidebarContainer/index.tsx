import * as React from "react";
import NewsSidebar from "../../stories/screens/NewsSidebar";
export interface Props {
	navigation: any;
}
export interface State {}
export default class NewsSidebarContainer extends React.Component<Props, State> {
	render() {
		return <NewsSidebar navigation={this.props.navigation} />;
	}
}
