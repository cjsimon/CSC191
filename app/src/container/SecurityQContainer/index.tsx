import * as React from "react";
import SecurityQ from "../../stories/screens/SecurityQ";
import {userInfo} from "../../container/CreatePageContainer";

export interface Props {
	navigation: any;
}
export var accountCreate = true;
export interface State {}
export default class SecurityQContainer extends React.Component<Props, State> {
	getUserName() {
		return userInfo[0];
	}
	accountIsCreated() {
		accountCreate = true;
	}
	accountIsNot() {
		accountCreate = false;
	}
	render() {
		return <SecurityQ navigation={this.props.navigation} username={this.getUserName}
		accountValid = {this.accountIsCreated} accountNot = {this.accountIsNot}/>;
	}
}
