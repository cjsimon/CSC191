import * as React from "react";
import { WebView, StatusBar} from 'react-native';
import { Container, Header, Title, Footer, FooterTab, Text, Button, Icon, Body } from "native-base";
import { NavigationActions } from "react-navigation";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class NewsPage extends React.Component<Props, State> {
	render() {
		//const param = this.props.navigation.state.params;
		//style={[{backgroundColor: 'black', height: 100}]} HEADER
		//style={{color: "white"}} TITLE
		//onPress={() =>this.props.navigation.dispatch(NavigationActions.back('Home'))} BUTTON
		return (
			<Container style={styles.container}>
				<Header style={{backgroundColor: 'black', height: 100}}>
				<StatusBar barStyle="light-content"/>
					<Button transparent onPress={() => this.props.navigation.dispatch(NavigationActions.back('Home'))}>
						<Icon name="ios-arrow-back" style={{color: "white"}}/>
					</Button>
						<Body>
						<Title> <Text style={{color: "white"}}>The News</Text> </Title>
						</Body>
					<Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
						<Icon name="more" style={{color: "white"}}/>
					</Button>
				</Header>

				<WebView
	        source={{uri: 'http://money.cnn.com/'}}
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

export default NewsPage;
