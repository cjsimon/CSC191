import * as React from "react";
import { StatusBar, WebView } from 'react-native';
import { Container, Header, Title,  Button, Icon, Body, Footer,
	Text, FooterTab} from "native-base";
import { NavigationActions } from "react-navigation";


import styles from "./styles";
export interface Props {
	navigation: any;
	bodyCont: any;
	changeType: Function;
	changeName: Function;
}
export interface State {}

class StocksPage extends React.Component<Props, State> {
	render() {
		//const param = this.props.navigation.state.params;
		//style={[{ height: 100 },{backgroundColor: 'black'}]} Header
		//style={{color: "white"} TITLE
		//onPress={() =>this.props.navigation.dispatch(NavigationActions.back('Home'))} BUTTON
		/*
		{this.props.bodyCont}

		<Button onPress={this.props.changeType()}><Text>SUP BOI</Text></Button>
		<Input
			onChangeText={text => {holder = text}}
			placeholder = {"Username"}
			editable = {true}
			maxLength = {2222}
		/>

		<WebView
			source={{uri: 'https://www.tradingview.com/chart/?symbol=NASDAQ:AAPL'}}
			style={{marginTop: 20}}
		/>
		*/
		return (
			<Container style={styles.container}>
			<Header style={{backgroundColor: 'black', height: 100}}>
			<StatusBar barStyle="light-content"/>
				<Button transparent onPress={() => this.props.navigation.dispatch(NavigationActions.back('Home'))}>
					<Icon name="ios-arrow-back" style={{color: "white"}}/>
				</Button>
					<Body>
					<Title> <Text style={{color: "white"}}>Stocks Page </Text> </Title>
					</Body>
				<Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
					<Icon name="more" style={{color: "white"}}/>
				</Button>
			</Header>

				<WebView
					source={{uri: 'https://www.tradingview.com/chart/?symbol=NASDAQ:AAPL'}}
					style={{marginTop: 20}}
				/>

				<Footer>
					<FooterTab style={{backgroundColor: "black"}}>
						<Button vertical onPress={() => this.props.navigation.navigate("Purchase")}>
							<Icon name="card" style={{color: "white"}}/>
							<Text>Purchase</Text>
						</Button>
						<Button vertical onPress={() => this.props.navigation.navigate("History")}>
							<Icon name="stats" style={{color: "white"}}/>
							<Text>History</Text>
						</Button>
						<Button vertical onPress={() => this.props.navigation.navigate("Share")}>
							<Icon name="people" style={{color: "white"}}/>
							<Text>Share</Text>
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


export default StocksPage;
