import * as React from "react";
import TruChart from "../../stories/screens/TruChart";
import {WebView} from 'react-native';
import {Title, Text, Button, FooterTab, Toast } from "native-base";
import {stockCode,setCode,typeGraph,startDate,endDate,areaSI,cycle} from "../../container/TruFilterContainer"
import {setStockInfo,setIndex} from "../../container/BuyPageContainer"
import {setSellStockInfo,setSellIndex} from "../../container/SellPageContainer"
export interface Props {
	navigation: any;
}
export interface State {}


export function setStockCode(code) {
	setCode(code)
}
export function TruSetIndex(targ) {
	index = targ
}
export function setSellShare(targ) {
	shares = targ
}
export function setExists(targ) {
	exists = targ
}

var index = -1
var shares = 0;
var exists = true

export default class TruChartContainer extends React.Component<Props, State> {

	goBuy() {
		const {navigate} = this.props.navigation;
		fetch("http://localhost:5000/api/v1/stock/", {
			method: 'POST',
			headers :
			{
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			},
			body: JSON.stringify({"code":stockCode})
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			var tmp = data

			if(tmp.valid == "True")
			{
				setIndex(index)
				setStockInfo(tmp)
				navigate("BuyPage")
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
	goSell(){
		const {navigate} = this.props.navigation;
		fetch("http://localhost:5000/api/v1/stock/", {
			method: 'POST',
			headers :
			{
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			},
			body: JSON.stringify({"code":stockCode})
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			var tmp = data

			if(tmp.valid == "True" && exists)
			{
				setSellIndex(index)
				setSellStockInfo(tmp,shares)
				navigate("SellPage")
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
	renderStartButton() {
		return (
			<FooterTab style={{backgroundColor: "black"}}>
			<Button vertical success block onPress={() => this.goBuy()}>
				<Text style={{color: "white"}}> Buy Stock </Text>
			</Button>
			<Button vertical block success onPress={() => this.goSell()}>
				<Text style={{color: "white"}}> Sell Stock </Text>
			</Button>
			</FooterTab>
		)
	}
	render() {
		var form = (
			<WebView
				source={{uri: 'https://trucharts.com/Chart.aspx?Provider=DB&Code='+stockCode+typeGraph+'&Scale=0&IND='+areaSI+'{U};VOLMA(60);MACD(12,26,9);ATR(10)&OVER=MA(13);MA(50);TCFast()&Skin=GreenRed&Size=520&RT=0&Start='+startDate+'&End='+endDate+'&Layout=2Line;Default;Price;HisDate&Cycle='+cycle+'&x=100&y=100'}}
				style={{marginTop: 0}}
				scrollEnabled={false}
				scalesPageToFit={true}
			/>
		)
		var form2 = (
			<Title><Text style={{color: "white"}}>TruChart for {stockCode}</Text></Title>
		)
		var form3 = this.renderStartButton();
		return <TruChart navigation={this.props.navigation} filter={form3} title={form2} chart={form}/>;
	}
}
