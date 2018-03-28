import * as React from "react";
import SecurityQ, {userQ, answersSQ} from "../../stories/screens/SecurityQ";
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

		fetch("http://localhost:5000/api/v1/demo/", {
			method: 'POST',
			headers :
			{'Accept': 'application/json',
    	'Content-Type': 'application/json',
			},
			body:JSON.stringify({username: userInfo[0],
			email: userInfo[1],
			password: userInfo[2],
			phone: userInfo[3],
			bday: userInfo[4],
		  q1: userQ[0],
		  a1: answersSQ[0],
			q2: userQ[1],
		  a2: answersSQ[1],
			q3: userQ[2],
		  a3: answersSQ[2]})
		})
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
