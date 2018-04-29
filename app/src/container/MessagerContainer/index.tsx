import * as React from "react";
import Messager from "../../stories/screens/Messager";
export interface Props {
	navigation: any;
}
export interface State {}
export default class MessagerContainer extends React.Component<Props, State> {
	render() {
		return <Messager navigation={this.props.navigation} />;
	}
}
