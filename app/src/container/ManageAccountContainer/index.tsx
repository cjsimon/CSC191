import * as React from "react";
import ManageAccount from "../../stories/screens/ManageAccount";
export interface Props {
	navigation: any;
}
export interface State {}
export default class ManageAccountContainer extends React.Component<Props, State> {
	render() {
		return <ManageAccount navigation={this.props.navigation} />;
	}
}
