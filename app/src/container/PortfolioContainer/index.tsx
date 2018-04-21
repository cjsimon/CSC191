import * as React from "react";
import Portfolio from "../../stories/screens/Portfolio";
import { Text, Header, Button, Input, Item, Icon} from "native-base";
import {StatusBar} from 'react-native';
export interface Props {
	navigation: any;
}
export interface State {}
export default class PortfolioContainer extends React.Component<Props, State> {
	textInput: any;
	renderButton() {
			return (
			<Button transparent >
				<Text style={{color: "white"}}>Submit</Text>
			</Button>
		)
	}
	render() {
		var form = (
			<Header searchBar rounded style={{height: 100, backgroundColor: "black"}}>
				<StatusBar barStyle="light-content" />
				 <Item style={{backgroundColor: "white"}}>
					 <Icon name="ios-search" style={{color: "black"}}/>
					 <Input placeholder="Search" onChangeText={text => {this.textInput = text}}/>
				 </Item>
				 {this.renderButton()}
		 </Header>
		)
		return <Portfolio navigation={this.props.navigation} seacrchForm={form}/>;
	}
}
