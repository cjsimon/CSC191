import * as React from "react";
import TruChart from "../../stories/screens/TruChart";
import {WebView} from 'react-native';
import {Title, Text, Button, FooterTab } from "native-base";
import {stockCode,setCode,typeGraph,startDate,endDate,areaSI,cycle} from "../../container/TruFilterContainer"
export interface Props {
	navigation: any;
}
export interface State {}


export function setStockCode(code) {
	setCode(code)
}


export default class TruChartContainer extends React.Component<Props, State> {

	openIt() {
		/*this.props.navigation.navigate("DrawerOpen")*/
	}
	renderStartButton() {
		return (
			<FooterTab style={{backgroundColor: "black"}}>
			<Button vertical block onPress={() => this.forceUpdate()}>
				<Text style={{color: "white"}}> Update Graph </Text>
			</Button>
			<Button vertical block  onPress={() => this.openIt()}>
				<Text style={{color: "white"}}> Filter Options </Text>
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
