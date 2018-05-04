import * as React from "react";
import Portfolio from "../../stories/screens/Portfolio";
import { Toast, Text, Header, CardItem, Card, Title, Footer, Body, Button, Input, Item, Left, Right, Icon, Content} from "native-base";
import {StatusBar} from 'react-native';
import {setStockCode} from "../../container/TruChartContainer"
import {setStockInfo,setIndex} from "../../container/BuyPageContainer"
import {setSellStockInfo} from "../../container/SellPageContainer"
//import {userStuff} from "../../container/LoginContainer"asdfasdf

export interface Props {
	navigation: any;
}
export interface State {}

var stockInfo = []
var stockHist = []


export function setStock(newname) {
	stockInfo.push(newname);
}
export function setHistory(newname) {
	stockHist.push(newname)
}
export function updateStock(share,index) {
	stockInfo[index][5] += share
}
export function updateGenAmm(targ,bo) {
	if(bo)
	{
		gen_ammount -= targ
	}
	else
	{
		gen_ammount += targ
	}
}

var textInput = ""
export var gen_ammount = 10000;

export default class PortfolioContainer extends React.Component<Props, State> {


	validBuy() {
		var doesExist = false;
		var index = 0;
		for(var i=0; i<stockInfo.length; i++)
		{
			if(stockInfo[i][0] == textInput)
			{
				doesExist = true
				index = i
			}
		}
		if(textInput != "")
		{
			const {navigate} = this.props.navigation;
			fetch("http://localhost:5000/api/v1/stock/", {
				method: 'POST',
				headers :
				{
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				},
				body: JSON.stringify({"code":textInput})
			}).then(function(response) {
				return response.json();
			}).then(function(data) {
				var tmp = data

				if(tmp.valid == "True")
				{
					if(doesExist){
						setIndex(index)
					}
					setStockInfo(tmp)
					navigate("BuyPage")
					textInput = ""
				}
				else {
					Toast.show({
						text: "Enter in a valid Stock Code",
						duration: 2000,
						position: "top",
						textStyle: { textAlign: "center" },
					});
				}
			})
		}
		else
		{
			Toast.show({
				text: "Enter in Search for Valid Buy",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}

	validSell() {
		var doesExist = false;
		for(var i=0; i<stockInfo.length; i++)
		{
			if(stockInfo[i][0] == textInput)
			{
				doesExist = true
			}
		}
		if(textInput != "" && doesExist)
		{

			const {navigate} = this.props.navigation;
			fetch("http://localhost:5000/api/v1/stock/", {
				method: 'POST',
				headers :
				{
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				},
				body: JSON.stringify({"code":textInput})
			}).then(function(response) {
				return response.json();
			}).then(function(data) {
				var tmp = data

				if(tmp.valid == "True")
				{
					setSellStockInfo(tmp)
					navigate("SellPage")
					textInput = ""
				}
				else {
					Toast.show({
						text: "Enter in a valid Stock Code",
						duration: 2000,
						position: "top",
						textStyle: { textAlign: "center" },
					});
				}});
		}
		else
		{
			Toast.show({
				text: "You do not own this stock or invalid. Please try another.",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}
	getAccountValue() {
		var ans = 0
		for(var i=0; i<stockInfo.length; i++)
		{
			ans += parseFloat(stockInfo[i][4])*parseFloat(stockInfo[i][5])
		}
		return ans.toFixed(2)
	}
	getPercent() {
		var ans = 0
		for(var i=0; i<stockInfo.length; i++)
		{
			ans += parseFloat(stockInfo[i][3])
		}
		return ans.toFixed(2)
	}
	renderButton() {
			return (
				<Content>
				<Header searchBar rounded style={{height: 100, backgroundColor: "black"}}>
					<StatusBar barStyle="light-content" />
					 <Item style={{backgroundColor: "white"}}>
						 <Icon name="ios-search" style={{color: "black"}}/>
						 <Input placeholder="Enter Valid Ticker Code" onChangeText={text => {textInput = text}}/>
					 </Item>
					<Button transparent>
						<Text style={{color: "white"}}>Cancel</Text>
					</Button>
			 </Header>
			 <Body style={{backgroundColor: "black"}}></Body>
			 <Footer style={{backgroundColor: "black"}}>
				 <Left />
				 <Left>
				 <Button success onPress={() => this.validBuy()}>
					 <Text> Buy </Text>
				 </Button>
				 </Left>
				 <Right>
				 <Button danger onPress={() => this.validSell()}>
					 <Text> Sell </Text>
				 </Button>
				 </Right>
				 <Right />
				 </Footer>
			 </Content>
		)
	}
	goTruChart(target) {
		setStockCode(target);
		this.props.navigation.navigate("TruDrawer")
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
		if(num<=0)
			return (<Text>Empty</Text>);
		return (
			<Content>
			<Button onPress={() => this.goTruChart(stockInfo[num-1][0])} style={{height: 75, margin: 5, backgroundColor:"grey"}}>
			<CardItem style={{backgroundColor:"grey"}}>
				<Left>
					<Text> {stockInfo[num-1][0] + "\n$"+ stockInfo[num-1][4]} </Text>
				</Left>
				<Title>
					<Text> {stockInfo[num-1][5]} </Text>
				</Title>
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
			return (<Text>Empty</Text>);
		return (
			<Content>
			<Button onPress={() => this.goTruChart(stockHist[num-1][0])} style={{height: 75, margin: 5, backgroundColor:"grey"}}>
			<CardItem style={{backgroundColor:"grey"}}>
				<Left>
					<Text> {stockHist[num-1][0]  +"\n$"+ stockHist[num-1][4]} </Text>
				</Left>
				<Body>
					<Text> History SHARES </Text>
				</Body>
				<Right>
					<Text> {parseFloat(stockHist[num-1][2]).toFixed(2)} </Text>
					<Text> {parseFloat(stockHist[num-1][3]).toFixed(2)} </Text>
					{this.renderArrow(stockHist[num-1][3])}
				</Right>
			</CardItem>
			</Button>
			{this.getHist(num-1)}
			</Content>
		)
	}
	renderMonitor() {
		return (
			<Card style={{height: 375, backgroundColor:"grey"}}>
				<CardItem style={{ backgroundColor:"grey"}}>
					<Right />
					<Header><Title>CURRENT BALANCE</Title></Header>
					<Left />
				</CardItem>
					<Body>
					<Text> ${(gen_ammount).toFixed(2)} </Text>
					</Body>
				<CardItem style={{ backgroundColor:"grey"}}>
					<Right />
					<Header><Title>ACCOUNT VALUE</Title></Header>
					<Left />
				</CardItem>
					<Body>
					<Text> ${this.getAccountValue()} </Text>
					</Body>
				<CardItem style={{ backgroundColor:"grey"}}>
					<Right />
					<Header><Title>ACCOUNT PERCENT GAIN</Title></Header>
					<Left />
				</CardItem>
					<Body>
					<Text> {this.getPercent() + "\t"} {this.renderArrow(this.getPercent())} </Text>
					</Body>
			</Card>
		)
	}
	renderPort(){
		return (<Content style={{backgroundColor:"black"}}>
		<CardItem style={{backgroundColor:"black"}}>
		<Button disabled block vertical transparent>
			<Text style={{color: "white"}}>Portfolio</Text>
		</Button>
		</CardItem>
		<CardItem style={{backgroundColor: 'black'}}>
			<Button disabled vertical transparent>
				<Text style={{color: "lightgreen",paddingRight: 65,paddingTop:0,paddingBottom:0}}>Stock</Text>
			</Button>
			<Button disabled vertical transparent>
				<Text style={{color: "lightgreen",paddingTop:0,paddingBottom:0}}>Shares</Text>
			</Button>
			<Button disabled vertical transparent>
				<Text style={{color: "lightgreen",paddingLeft: 50,paddingTop:0,paddingBottom:0}}>Percent</Text>
			</Button>
		</CardItem>
		{this.getPort(stockInfo.length)}
		</Content>)
	}
	renderHist(){
		if(stockHist.length == 0)
		{
			return (<Content style={{backgroundColor:"black"}}>
			<Title><Text style={{color: "lightgreen"}}>No Transactions Yet {"\n"}</Text></Title>
			</Content>)
		}
		else
		{
			return (<Content style={{backgroundColor:"black"}}>
			<CardItem style={{backgroundColor:"black"}}>
			<Button disabled block vertical transparent>
				<Text style={{color: "white"}}>Trading History</Text>
			</Button>
			</CardItem>
			<CardItem style={{backgroundColor: 'black'}}>
				<Button disabled vertical transparent>
					<Text style={{color: "lightgreen",paddingRight: 65,paddingTop:0,paddingBottom:0}}>Stock</Text>
				</Button>
				<Button disabled vertical transparent>
					<Text style={{color: "lightgreen",paddingTop:0,paddingBottom:0}}>Shares</Text>
				</Button>
				<Button disabled vertical transparent>
					<Text style={{color: "lightgreen",paddingLeft: 50,paddingTop:0,paddingBottom:0}}>Percent</Text>
				</Button>
			</CardItem>
			{this.getHist(stockHist.length)}
			</Content>)
		}
	}
	render() {

		var form = this.renderButton();
		var form2 = this.renderPort();
		var form3 = this.renderHist();
		var form4 = this.renderMonitor();
		const something = this.props.navigation;
		return <Portfolio navigation={something} monitor={form4} renderHistory = {form3} renderPortfolio = {form2} searchForm={form}/>;
	}
}
