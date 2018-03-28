import * as React from "react";
import Purchase from "../../stories/screens/Purchase";
export interface Props {
	navigation: any;
}
export interface State {}
export default class PurchaseContainer extends React.Component<Props, State> {
	render() {
		return <Purchase navigation={this.props.navigation} />;
	}
}
