import * as React from "react";
import Sidebar from "../../stories/screens/Sidebar";
import { Text } from "native-base";
import {userStuff} from "../../container/LoginContainer";
import {clearAllStocks} from "../../container/PortfolioContainer";

export interface Props {
	navigation: any;
	userStuff: any;
}

export interface State {}

export default class SidebarContainer extends React.Component<Props, State> {
	clearStocks(){
		clearAllStocks();
	}
	render() {
		const form = (<Text style={{color: "white", marginTop: 40}}> {userStuff.username} </Text>)
		return <Sidebar userStuff={form} clear={() => this.clearStocks()} navigation={this.props.navigation} />;
	}
}
