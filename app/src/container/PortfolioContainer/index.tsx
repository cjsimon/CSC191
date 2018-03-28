import * as React from "react";
import Portfolio from "../../stories/screens/Portfolio";
export interface Props {
	navigation: any;
}
export interface State {}
export default class PortfolioContainer extends React.Component<Props, State> {
	render() {
		return <Portfolio navigation={this.props.navigation} />;
	}
}
