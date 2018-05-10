import * as React from "react";
import Portfolio from "../../stories/screens/Portfolio";
import { Toast, Text, Header, CardItem, Card, Title, Footer, Body, Button, Input, Item, Left, Right, Icon, Content} from "native-base";
import {StatusBar} from 'react-native';
import {setStockCode,setSellShare,TruSetIndex,setExists} from "../../container/TruChartContainer"
import {setStockInfo,setIndex} from "../../container/BuyPageContainer"
import {setSellStockInfo,setSellIndex} from "../../container/SellPageContainer"
import {userStuff,fetchUrl} from "../../container/LoginContainer";

export interface Props {
	navigation: any;
}
export interface State {}

var stockInfo = []
var stockHist = []

var textInput = "";

export function clearAllStocks() {
	stockInfo = []
	stockHist = []
}
export function setStock(newname) {
	stockInfo.push(newname);
}
export function setHistory(newname) {
	stockHist.push(newname)
}
export function updateStock(share,index,bors) {
	if(stockInfo[index][5]-share == 0)
	{
		stockInfo.splice(index, 1);
	}
	else
	{
		if(bors)
			stockInfo[index][5] = parseFloat(stockInfo[index][5])-share
		else
			stockInfo[index][5] = parseFloat(stockInfo[index][5])+share
	}
}
export function updateGenAmm(targ,bo) {
	var tmp = userStuff.balance
	if(bo)
	{
		tmp -= parseFloat(targ)
	}
	else
	{
		tmp += parseFloat(targ)
	}
	userStuff.balance = tmp
	fetch("http://"+fetchUrl+"/api/v1/updateBalance/",{
	method: 'POST',
	headers :
	{
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		username: userStuff.username,
		password: userStuff.password,
		balance: userStuff.balance
	})
	})
}


export default class PortfolioContainer extends React.Component<Props, State> {

	boughtOrSold(num) {
		if(num == 1)
			return "Bought"
		else if(num == 0)
			return "Sold"
		else
			return "NaN"
	}
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
			fetch("http://"+fetchUrl+"/api/v1/stock/", {
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
		var index = 0;
		for(var i=0; i<stockInfo.length; i++)
		{
			if(stockInfo[i][0] == textInput)
			{
				doesExist = true
				index = i
			}
		}
		if(textInput != "" && doesExist)
		{

			const {navigate} = this.props.navigation;
			fetch("http://"+fetchUrl+"/api/v1/stock/", {
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
					setSellIndex(index)
					setSellStockInfo(tmp,stockInfo[index][5])
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
				 <Button success onPress={() => this.validSell()}>
					 <Text> Sell </Text>
				 </Button>
				 </Right>
				 <Right />
				 </Footer>
			 </Content>
		)
	}
	goTruChartPort(target) {
		var index = -1;
		for(var i=0; i<stockInfo.length; i++)
		{
			if(stockInfo[i][0] == target)
			{
				index = i
				break
			}
		}
		setStockCode(target);
		setSellShare(stockInfo[index][5]);
		TruSetIndex(index);
		this.props.navigation.navigate("TruChart")
	}
	goTruChartHist(target) {
		var index = -1;
		for(var i=0; i<stockInfo.length; i++)
		{
			if(stockInfo[i][0] == target)
			{
				index = i
				break
			}
		}
		if(index == -1)
			setExists(false)
		else
			setExists(true)
		setStockCode(target);
		if(index != -1)
			setSellShare(stockHist[index][5]);
		TruSetIndex(index);
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
		if(num<=0)
			return (<Text>Empty</Text>);
		return (
			<Content>
			<Button onPress={() => this.goTruChartPort(stockInfo[num-1][0])} style={{height: 75, margin: 5, backgroundColor:"grey"}}>
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
			<Button onPress={() => this.goTruChartHist(stockHist[num-1][0])} style={{height: 75, margin: 5, backgroundColor:"grey"}}>
			<CardItem style={{backgroundColor:"grey"}}>
				<Left>
					<Text> {stockHist[num-1][0]  +"\n$"+ stockHist[num-1][4]} </Text>
				</Left>
				<Title>
					<Text> {stockHist[num-1][5] + " "+ this.boughtOrSold(stockHist[num-1][6])} </Text>
				</Title>
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
					<Text> ${userStuff.balance.toFixed(2)} </Text>
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
		if(stockInfo.length == 0)
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
