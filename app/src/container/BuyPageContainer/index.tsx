import * as React from "react";
import BuyPage from "../../stories/screens/BuyPage";
import {Text, Button,Content, Left, Right, Toast, Card, CardItem} from "native-base"
import {updateStock,setStock,updateGenAmm,setHistory,gen_ammount} from "../../container/PortfolioContainer"
export interface Props {
	navigation: any;
}
export interface State {}

// index is respected in THIS
// code,name,current,high,low,open,closed,preclosed
var stockInfo = []
var testShare = 0;
var index = -1;
export function setStockInfo(targ) {
	//[data[i].code+"",data[i].name + "",data[i].change + "",data[i].changeP + "",data[i].TodayPrice+"",data[i].shares]
	stockInfo = [targ.code,targ.name,targ.current,targ.high,targ.low,targ.open,targ.closed,targ.preclosed,targ.change,targ.changeP,targ.shares]

}
export function setIndex(targ) {
	index = targ
}

export default class BuyPageContainer extends React.Component<Props, State> {
	goBackUpdate() {
		if(testShare != 0)
		{
			if(index != -1)
			{
				updateStock(testShare,index,false)
			}
			else
				setStock([stockInfo[0],stockInfo[1],stockInfo[8],stockInfo[9],stockInfo[2],testShare+""])
			//[data[i].code+"",data[i].name + "",data[i].change + "",data[i].changeP + "",data[i].TodayPrice+"",data[i].shares]
		}
		setHistory([stockInfo[0],stockInfo[1],stockInfo[8],stockInfo[9],stockInfo[2],testShare+"","Bought\n"])
		updateGenAmm((testShare*parseFloat(stockInfo[2])).toFixed(2),true)
		this.props.navigation.navigate("Portfolio")
		testShare = 0
	}
	renderTitle() {
		return <Text style={{fontSize: 25}}> {stockInfo[0] + " --- " + stockInfo[1]} </Text>
	}
	renderCurrent() {
		return <Text style={{fontSize: 20}}> Current Price: ${parseFloat(stockInfo[2]).toFixed(2)} </Text>
	}
	incr(select) {
		if(select && gen_ammount > (testShare*parseFloat(stockInfo[2])))
		{
			if(gen_ammount < ((testShare+1)*(parseFloat(stockInfo[2]))))
			{
				Toast.show({
					text: "Balance has reached it's limit.",
					duration: 2000,
					position: "top",
					textStyle: { textAlign: "center" },
				});
			}
			else
			{
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
		return <BuyPage displayForm={form1} navigation={this.props.navigation} />;
	}
}
