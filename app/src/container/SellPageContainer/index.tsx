import * as React from "react";
import SellPage from "../../stories/screens/SellPage";
import {Text, Button,Content, Left, Right, Toast, Card, CardItem} from "native-base"
import {updateStock,updateGenAmm,setHistory} from "../../container/PortfolioContainer"
export interface Props {
	navigation: any;
}
export interface State {}
var stockInfo = []
var testShare = 0;
var index = -1;
export function setSellStockInfo(targ,shares) {
	stockInfo = [targ.code,targ.name,targ.current,targ.high,targ.low,targ.open,targ.closed,targ.preclosed,targ.change,targ.changeP,shares]
}
export function setSellIndex(targ) {
	index = targ
}


export default class SellPageContainer extends React.Component<Props, State> {
	goBackUpdate() {
		updateStock(testShare,index,true)
		setHistory([stockInfo[0],stockInfo[1],stockInfo[8],stockInfo[9],stockInfo[2],testShare,"Sold\n"])
			//[data[i].code+"",data[i].name + "",data[i].change + "",data[i].changeP + "",data[i].TodayPrice+"",data[i].shares]
		var tmp = (testShare*parseFloat(stockInfo[2])).toFixed(2)
		updateGenAmm(tmp,false)
		this.props.navigation.navigate("Portfolio")
		testShare = 0
	}
	renderTitle() {
		return <Text> {stockInfo[0] + " --- " + stockInfo[1]} </Text>
	}
	renderCurrent() {
		return <Text> Current Price: ${parseFloat(stockInfo[2]).toFixed(2)} </Text>
	}
	incr(select) {
		if(select)
		{
			if(testShare >= stockInfo[10])
			{
				Toast.show({
					text: "You have no more stocks to sell.",
					duration: 2000,
					position: "top",
					textStyle: { textAlign: "center" },
				});
			}
			else {
				testShare += 1
			}
		}
		else if(!select && testShare > 0)
		{
			testShare -= 1
		}
		this.forceUpdate();
	}
	renderPrice() {
		return (<Text style={{color: "lightgreen",fontSize: 25}}>${(testShare*parseFloat(stockInfo[2])).toFixed(2)}</Text>)
	}
	renderPlus() {
		return <Button success onPress={() => this.incr(true)}><Text style={{fontSize: 20}}>+</Text></Button>
	}
	renderMinus() {
		return <Button success onPress={() => this.incr(false)}><Text style={{fontSize: 20}}>-</Text></Button>
	}
	renderMonitor() {
		return <Button success disabled transparent><Text style={{fontSize: 20}}>{testShare}</Text></Button>
	}
	renderConfirm() {
		return <Button onPress={() => this.goBackUpdate()}><Text>Confirm</Text></Button>
	}
	renderDisplay() {
		return (
			<Content padder style={{backgroundColor: "black"}}>
				<Card>
				<CardItem>
					{this.renderTitle()}
				</CardItem>
				<CardItem>
					{this.renderCurrent()}
				</CardItem>
				</Card>
				{this.renderLower()}
			<Button success full block onPress={() => this.goBackUpdate()}><Text>Confirm</Text></Button>
			</Content>
		)
	}
	renderPriceMon(){
		return (
		<CardItem style={{backgroundColor: "black"}}>
		<Left />
			{this.renderPrice()}
		<Right />
		</CardItem>)
	}
	renderButtons() {
		return (
			<CardItem style={{backgroundColor: "black"}}>
				<Left />
				{this.renderMinus()}
				<Left />
				{this.renderMonitor()}
				<Right />
				{this.renderPlus()}
				<Right />
			</CardItem>
		)
	}
	renderLower() {
		return (
			<Card style={{backgroundColor: "black"}}>
			{this.renderPriceMon()}
			{this.renderButtons()}
			</Card>
		)
	}
	render() {
		const form1 = this.renderDisplay()
		return <SellPage displayForm={form1} navigation={this.props.navigation} />;
	}
}
