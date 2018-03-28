import * as React from "react";
import ManageBlock from "../../stories/screens/ManageBlock";
export interface Props {
	navigation: any;
}
export interface State {}
export default class ManageBlockContainer extends React.Component<Props, State> {
	render() {
		return <ManageBlock navigation={this.props.navigation} />;
	}
}
