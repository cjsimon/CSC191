import * as React from "react";
import ForgotPage from "../../stories/screens/ForgotPage";
export interface Props {
	navigation: any;
}
export interface State {}
export default class ForgotPageContainer extends React.Component<Props, State> {
	render() {
		return <ForgotPage navigation={this.props.navigation} />;
	}
}
