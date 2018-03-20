import * as React from "react";
import StocksPage from "../../stories/screens/StocksPage";

// I HAVE NO CLUE HOW TO WORK THIS
//import TradingViewWidget from 'react-tradingview-widget';\
//return <TradingViewWidget symbol="NASDAQ:AAPL" />;

export interface Props {
	navigation: any;
}
export interface State {}
export default class StocksPageContainer extends React.Component<Props, State> {
	render() {
		return <StocksPage navigation={this.props.navigation} />;
	}
}
