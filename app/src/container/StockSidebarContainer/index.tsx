import * as React from "react";
import StockSidebar from "../../stories/screens/StockSidebar";
export interface Props {
	navigation: any;
}
export interface State {}
export default class StockContainer extends React.Component<Props, State> {
	render() {
		return <StockSidebar navigation={this.props.navigation} />;
	}
}
