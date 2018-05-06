import * as React from "react";
import SellPage from "../../stories/screens/SellPage";
import {Text, Content, Button, Left, Right, Body, Toast} from "native-base"
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
		updateStock(testShare,index)
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
	renderOpen() {
		return <Text> Open price : ${parseFloat(stockInfo[5]).toFixed(2)} </Text>
	}
	renderClosed() {
		return <Text> Closed price: ${parseFloat(stockInfo[6]).toFixed(2) + "\n"} Pre-Closed price: ${parseFloat(stockInfo[7]).toFixed(2)} </Text>
	}
	renderHighLow() {
		return <Text> High price: ${parseFloat(stockInfo[3]).toFixed(2) + "\n"} Low price: ${parseFloat(stockInfo[4]).toFixed(2)} </Text>
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
		return (<Text>+${(testShare*parseFloat(stockInfo[2])).toFixed(2)}</Text>)
	}
	renderPlus() {
		return <Button onPress={() => this.incr(true)}><Text>+</Text></Button>
	}
	renderMinus() {
		return <Button onPress={() => this.incr(false)}><Text>-</Text></Button>
	}
	renderMonitor() {
		return <Button disabled transparent ><Text>{testShare}</Text></Button>
	}
	renderConfirm() {
		return <Button onPress={() => this.goBackUpdate()}><Text>Confirm</Text></Button>
	}
	renderDisplay() {
		return (
			<Content>
				{this.renderTitle()}
				{this.renderCurrent()}
				{this.renderOpen()}
				{this.renderClosed()}
				{this.renderHighLow()}
			</Content>
		)
	}
	renderButton() {
		return (
			<Content>
				{this.renderPrice()}
				<Left>
				{this.renderPlus()}
				</Left>
				<Body>
				{this.renderMonitor()}
				</Body>
				<Right>
				{this.renderMinus()}
				</Right>
				{this.renderConfirm()}
			</Content>
		)
	}
	render() {
		const form1 = this.renderDisplay()
		const form2 = this.renderButton()
		return <SellPage displayForm={form1} controlForm={form2} navigation={this.props.navigation} />;
	}
}
