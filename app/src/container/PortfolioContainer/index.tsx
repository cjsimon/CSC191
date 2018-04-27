import * as React from "react";
import Portfolio from "../../stories/screens/Portfolio";
import { Text, Header, CardItem, Body, Button, Input, Item, Left, Right, Icon, Content} from "native-base";
import {StatusBar} from 'react-native';
import {setStockCode} from "../../container/TruChartContainer"
export interface Props {
	navigation: any;
}
export interface State {}

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
	render() {
		var form2
		fetch("http://localhost:5000/api/v1/stock/")
	  .then(function(response) {
			return response.json();
	  }).then(function(data) {
			form2 = (
				<Content>
				<Button onPress={() => this.goTruChart("FB")} style={{height: 75, margin: 5, backgroundColor:"grey"}}>
				<CardItem style={{backgroundColor:"grey"}}>
					<Left>
						<Text> {data[0].name} </Text>
					</Left>
					<Body>
						<Text> Number of Shares </Text>
					</Body>
					<Right>
						<Text> {data[0].change} </Text>
						<Text> {data[0].changeP} </Text>
					</Right>
				</CardItem>
				</Button>
				</Content>)
				alert(data[0].name)

		})
		var form = this.renderButton();
		var form3 = (
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
		const something = this.props.navigation;
		return <Portfolio navigation={something} renderHistory = {form3} renderPortfolio = {form2} searchForm={form}/>;
	}
}

/*
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
*/
