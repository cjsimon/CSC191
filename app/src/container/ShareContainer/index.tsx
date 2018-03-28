import * as React from "react";
import Share from "../../stories/screens/Share";
export interface Props {
	navigation: any;
}
export interface State {}
export default class ShareContainer extends React.Component<Props, State> {
	render() {
		return <Share navigation={this.props.navigation} />;
	}
}
