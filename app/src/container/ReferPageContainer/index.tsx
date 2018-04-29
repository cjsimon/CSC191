import * as React from "react";
import ReferPage from "../../stories/screens/ReferPage";
export interface Props {
	navigation: any;
}
export interface State {}
export default class ReferPageContainer extends React.Component<Props, State> {
	render() {
		return <ReferPage navigation={this.props.navigation} />;
	}
}
