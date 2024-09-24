import * as React from "react";
import AccountSetting from "../../stories/screens/AccountSetting";
export interface Props {
	navigation: any;
}
export interface State {}
export default class AccountSettingContainer extends React.Component<Props, State> {
	render() {
		return <AccountSetting navigation={this.props.navigation} />;
	}
}
