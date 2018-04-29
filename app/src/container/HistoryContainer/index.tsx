import * as React from "react";
import History from "../../stories/screens/History";
export interface Props {
	navigation: any;
}
export interface State {}
export default class HistoryContainer extends React.Component<Props, State> {
	render() {
		return <History navigation={this.props.navigation} />;
	}
}
