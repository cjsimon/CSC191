import * as React from "react";
import { WebView } from 'react-native';
import StocksPage from "../../stories/screens/StocksPage";

// I HAVE NO CLUE HOW TO WORK THIS
//import TradingViewWidget from 'react-tradingview-widget';\
//return <TradingViewWidget symbol="NASDAQ:AAPL" />;

export interface Props {
	navigation: any;
}
export interface State {}
/*var url = 'https://www.trucharts.com/Chart.aspx?Provider=DB'
var ind = 'IND=AreaRSI(14)'*/
var code = '&Code=AAPL'
var type = '&Type=1'


export default class StocksPageContainer extends React.Component<Props, State> {
	changeType() {
		if(type == '&Type=1')
			type = '&Type=2'
		else if(type == '&Type=2')
			type = '&Type=3'
		else
			type = '&Type=1'
		alert(type)
	}
	changeName() {
		if('&Code=AAPL' == code)
			code = '&Code=FB'
		else
			code = '&Code=AAPL'
		alert(code)
	}
	render() {
		var form = (
			<WebView
				source={{uri: 'https://www.trucharts.com/Chart.aspx?Provider=DB'+code+type+'&Scale=0&IND=AreaRSI(14){U};VOLMA(60);MACD(12,26,9);ATR(10)&OVER=MA(13);MA(50);&Size=520&RT=0&Start=20170624&End=20180224&Layout=2Line;Default;Price;HisDate&Cycle=DAY1'}}
				style={{marginTop: 20}}
			/>
			)
		return <StocksPage bodyCont={form} changeName={this.changeName} changeType={this.changeType} navigation={this.props.navigation} />;
	}
}
