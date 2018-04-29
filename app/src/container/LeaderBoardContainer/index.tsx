import * as React from "react";
import LeaderBoard from "../../stories/screens/LeaderBoard";
export interface Props {
	navigation: any;
}
export interface State {}
export default class LeaderBoardContainer extends React.Component<Props, State> {
	render() {
		return <LeaderBoard navigation={this.props.navigation} />;
	}
}
