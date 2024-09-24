import * as React from "react";
import Notification from "../../stories/screens/Notification";
export interface Props {
	navigation: any;
}
export interface State {}
export default class NotificationContainer extends React.Component<Props, State> {
	render() {
		return <Notification navigation={this.props.navigation} />;
	}
}
