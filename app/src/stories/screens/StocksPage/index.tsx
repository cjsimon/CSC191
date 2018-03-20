import * as React from "react";
import { WebView } from 'react-native';
import { Container, Header, Title,  Button, Icon, Left, Right, Body, Footer,
	Text, FooterTab} from "native-base";

// I HAVE NO CLUE HOW TO WORK THIS
//import TradingViewWidget from 'react-tradingview-widget';


import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}


class StocksPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Stocks Page"}</Title>
					</Body>

					<Right />
				</Header>
				<WebView
	        source={{uri: 'https://www.tradingview.com/chart/?symbol=NASDAQ:AAPL'}}
	        style={{marginTop: 20}}
	      />
				<Footer>
					<FooterTab>
						<Button vertical>
							<Icon name="apps" />
							<Text>Purchase</Text>
						</Button>
						<Button vertical>
							<Icon name="camera" />
							<Text>Camera</Text>
						</Button>
						<Button vertical>
							<Icon active name="navigate" />
							<Text>Navigate</Text>
						</Button>
						<Button vertical>
							<Icon name="person" />
							<Text>Contact</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}


// OLD IMPORTANT DATA FROM PREVIOUS SPRINTS
/*
<Container style={styles.container}>
	<Header>
		<Left>
			<Button transparent onPress={() => this.props.navigation.goBack()}>
				<Icon name="ios-arrow-back" />
			</Button>
		</Left>

		<Body style={{ flex: 3 }}>
			<Title>{param ? param.name.item : "Charts Page"}</Title>
		</Body>

		<Right />
	</Header>


</Container>
*/
/* DOGLASS
<script src="https://s3.tradingview.com/tv.js"></script>
<script type="text/javascript">
new TradingView.widget({
"autosize": true,
"symbol": "NASDAQ:AAPL",
"interval": "30",
"timezone": "Etc/UTC",
"theme": "Dark",
"style": "1",
"locale": "en",
"toolbar_bg": "#f1f3f6",
"enable_publishing": false,
"allow_symbol_change": true,
"hideideas": true
});
</script>
*/

export default StocksPage;
