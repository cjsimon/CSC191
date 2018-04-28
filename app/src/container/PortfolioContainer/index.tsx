import * as React from "react";
import Portfolio from "../../stories/screens/Portfolio";
import { Text, Header, CardItem, Body, Button, Input, Item, Left, Right, Icon, Content} from "native-base";
import {StatusBar} from 'react-native';
import {setStockCode} from "../../container/TruChartContainer"
export interface Props {
	navigation: any;
}
export interface State {}

var stockInfo = []

export function setStock(newname) {
	stockInfo.push(newname);

}


export default class PortfolioContainer extends React.Component<Props, State> {
	textInput: any;
	renderButton() {
			return (
				<Header searchBar rounded style={{height: 100, backgroundColor: "black"}}>
					<StatusBar barStyle="light-content" />
					 <Item style={{backgroundColor: "white"}}>
						 <Icon name="ios-search" style={{color: "black"}}/>
						 <Input placeholder="Search" onChangeText={text => {this.textInput = text}}/>
					 </Item>
					<Button transparent onPress={() => this.forceUpdate()}>
						<Text style={{color: "white"}}>Submit</Text>
					</Button>
			 </Header>
		)
	}
	goTruChart(target) {
		setStockCode(target);
		this.props.navigation.navigate("TruChart")
	}
	renderArrow(value) {
		if(parseFloat(value) > 0) {
			return (<Icon name="arrow-up" style={{color: "lightgreen"}}/>)
		}
		else if(parseFloat(value) < 0) {
			return (<Icon name="arrow-down" style={{color: "red"}}/>)
		}
		else {
			return <Text> NULL </Text>
		}

	}
	getPort(num) {
		if(num == 0)
			return;
		return (
			<Content>
			<Button onPress={() => this.goTruChart(stockInfo[num-1][0])} style={{height: 75, margin: 5, backgroundColor:"grey"}}>
			<CardItem style={{backgroundColor:"grey"}}>
				<Left>
					<Text> {stockInfo[num-1][1] + "\n" + stockInfo[num-1][0] } </Text>
				</Left>
				<Body>
					<Text> SHARES </Text>
				</Body>
				<Right>
					<Text> {parseFloat(stockInfo[num-1][2]).toFixed(2)} </Text>
					<Text> {parseFloat(stockInfo[num-1][3]).toFixed(2)} </Text>
					{this.renderArrow(stockInfo[num-1][3])}
				</Right>
			</CardItem>
			</Button>
			{this.getPort(num-1)}
			</Content>
		)
	}
	getHist(num) {
		if(num==0)
			return 0
		return (
			<Content>
			<Button onPress={() => this.goTruChart("FB")} style={{height: 75, margin: 5, backgroundColor:"grey"}}>
			<CardItem style={{backgroundColor:"grey"}}>
				<Left>
					<Text> FaceBook {"\n"} FB </Text>
				</Left>
				<Body>
					<Text> Number of Shares </Text>
				</Body>
				<Right>
					<Text> More stuff </Text>
					<Icon name="arrow-up" style={{color: "lightgreen"}}/>
				</Right>
			</CardItem>
			</Button>
			<Button onPress={() => this.goTruChart("MSFT")} style={{height: 75, margin: 5, backgroundColor:"grey"}}>
			<CardItem style={{backgroundColor:"grey"}}>
				<Left>
					<Text> Microsoft {"\n"} MSFT </Text>
				</Left>
				<Body>
					<Text> Number of Shares </Text>
				</Body>
				<Right>
					<Text> More stuff </Text>
					<Icon name="arrow-down" style={{color: "red"}}/>
				</Right>
			</CardItem>
			</Button>
			</Content>
		)
	}
	render() {
		/*fetch("http://localhost:5000/api/v1/stock/")
	  .then(function(response) {
			return response.json();
	  }).then(function(data) {
				alert(data[0].name)

		})*/
		var form = this.renderButton();
		var form2 = this.getPort(stockInfo.length);
		var form3 = this.getHist(1)
		const something = this.props.navigation;
		return <Portfolio navigation={something} renderHistory = {form3} renderPortfolio = {form2} searchForm={form}/>;
	}
}
