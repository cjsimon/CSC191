import * as React from "react";
import { Container, Header, Card, CardItem, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, FooterTab } from "native-base";
import {StatusBar,ScrollView} from 'react-native';

import styles from "./styles";
export interface Props {
	navigation: any;
	searchForm: any;
	renderHistory: any;
	renderPortfolio: any;
}
export interface State {}
class Portfolio extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
			<StatusBar barStyle="light-content"/>
			<Header searchBar style={{ height: 100, backgroundColor: 'black'}}>
				<Left>
				<Button transparent>
					<Icon
						active
						name="menu"
						onPress={() => this.props.navigation.navigate("DrawerOpen")}
						style={{color: "white"}}
					/>
				</Button>
				</Left>
				<Body>
					<Title><Text style={{color: "white"}}>Portfolio</Text></Title>
				</Body>
				<Right />
			</Header>

				<Content padder style={{backgroundColor: 'black'}}>
				<ScrollView>

				<Card style={{height: 300, backgroundColor:"white"}}>
					<CardItem>
						<Right />
						<Header><Title>ACCOUNT VALUE</Title></Header>
						<Left />
					</CardItem>
						<Body>
						<Text> ASDFASDFASDF </Text>
						</Body>
					<Footer>
					<Left />
					<Left>
					<Button success>
						<Text> Buy </Text>
					</Button>
					</Left>
					<Right>
					<Button danger>
						<Text> Sell </Text>
					</Button>
					</Right>
					<Right />
					</Footer>
				</Card>

				{this.props.searchForm}
				<Title><Text style={{color: "lightgreen"}}>Portfolio</Text></Title>
				{this.props.renderPortfolio}


				<Text>{"\n"}</Text>
				<Title><Text style={{color: "lightgreen"}}>Trading History</Text></Title>
				{this.props.renderHistory}

				</ScrollView>
				</Content>
				<Footer>
					<FooterTab style={{backgroundColor: "black"}}>
						<Button vertical>
							<Icon name="person" style={{color: "white"}}/>
							<Text>Portfolio</Text>
						</Button>
						<Button vertical onPress={() => this.props.navigation.navigate('Drawer')}>
							<Icon name="arrow-up" style={{color: "lightgreen"}}/>
							<Text>Home</Text>
						</Button>
						<Button vertical onPress={() => this.props.navigation.navigate('TwitsDrawer')}>
							<Icon name="chatbubbles" style={{color: "white", fontWeight: "bold"}}/>
							<Text>Stock Twits</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default Portfolio;
