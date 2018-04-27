import * as React from "react";
import TruChart from "../../stories/screens/TruChart";
import {WebView} from 'react-native';
export interface Props {
	navigation: any;
}
export interface State {}

var stockCode = "AAPL"
export function setStockCode(code) {
	stockCode = code;
}
export default class TruChartContainer extends React.Component<Props, State> {

	render() {
		var form = (
			<WebView
				source={{uri: 'https://trucharts.com/Chart.aspx?Provider=DB&Code='+stockCode+'&Type=3&Scale=0&IND=AreaRSI(14){U};VOLMA(60);MACD(12,26,9);ATR(10)&OVER=MA(13);MA(50);TCFast()&Skin=GreenRed&Size=520&RT=0&Start=20171027&End=20180427&Layout=2Line;Default;Price;HisDate&Cycle=DAY1&x=100&y=100'}}
				style={{marginTop: 0}}
				scrollEnabled={false}
			/>
		)
		return <TruChart navigation={this.props.navigation} chart={form}/>;
	}
}
