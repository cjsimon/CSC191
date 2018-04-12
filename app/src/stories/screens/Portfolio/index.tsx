import * as React from "react";
import { Container, Header, Card, CardItem, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, FooterTab } from "native-base";
import {StatusBar,ScrollView} from 'react-native';

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class Portfolio extends React.Component<Props, State> {
	render() {
		//const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
			<Header searchBar style={{ height: 100, backgroundColor: 'black'}}>
			<StatusBar barStyle="light-content"/>
				<Left />
				<Body>
					<Title><Text  style={{color: "white"}}>Portfolio</Text></Title>
				</Body>
				<Right>
					<Button transparent>
						<Icon
							active
							name="menu"
							onPress={() => this.props.navigation.navigate("DrawerOpen")}
							style={{color: "white"}}
						/>
					</Button>
				</Right>

			</Header>

				<Content padder>
				<ScrollView>
				<Card style={{height: 75, backgroundColor:"grey"}}>
					<CardItem style={{backgroundColor:"grey"}}>
						<Left>
							<Text> FaceBook {"\n"} FB </Text>
						</Left>
						<Body>
							<Text> Graph Stuff </Text>
						</Body>
						<Right>
							<Text> More stuff </Text>
							<Icon name="arrow-up" style={{color: "lightgreen"}}/>
						</Right>
					</CardItem>
				</Card>
				<Card style={{height: 75, backgroundColor:"grey"}}>
				<CardItem style={{backgroundColor:"grey"}}>
					<Left>
						<Text> Apple {"\n"} AAPL </Text>
					</Left>
					<Body>
						<Text> Graph Stuff </Text>
					</Body>
					<Right>
						<Text> More stuff </Text>
						<Icon name="arrow-down" style={{color: "red"}}/>
					</Right>
				</CardItem>
				</Card>
				<Card style={{height: 75, backgroundColor:"grey"}}>
				<CardItem style={{backgroundColor:"grey"}}>
					<Left>
						<Text> Google {"\n"} GOOGL </Text>
					</Left>
					<Body>
						<Text> Graph Stuff </Text>
					</Body>
					<Right>
						<Text> More stuff </Text>
						<Icon name="arrow-down" style={{color: "red"}}/>
					</Right>
				</CardItem>
				</Card>
				<Card style={{height: 75, backgroundColor:"grey"}}>
				<CardItem style={{backgroundColor:"grey"}}>
					<Left>
						<Text> Intel {"\n"} INTL </Text>
					</Left>
					<Body>
						<Text> Graph Stuff </Text>
					</Body>
					<Right>
						<Text> More stuff </Text>
						<Icon name="arrow-up" style={{color: "lightgreen"}}/>
					</Right>
				</CardItem>
				</Card>
				<Card style={{height: 75, backgroundColor:"grey"}}>
				<CardItem style={{backgroundColor:"grey"}}>
					<Left>
						<Text> HP {"\n"} HP </Text>
					</Left>
					<Body>
						<Text> Graph Stuff </Text>
					</Body>
					<Right>
						<Text> More stuff </Text>
						<Icon name="arrow-up" style={{color: "lightgreen"}}/>
					</Right>
				</CardItem>
				</Card>
				<Card style={{height: 75, backgroundColor:"grey"}}>
				<CardItem style={{backgroundColor:"grey"}}>
					<Left>
						<Text> Microsoft {"\n"} MSFT </Text>
					</Left>
					<Body>
						<Text> Graph Stuff </Text>
					</Body>
					<Right>
						<Text> More stuff </Text>
						<Icon name="arrow-down" style={{color: "red"}}/>
					</Right>
				</CardItem>
				</Card>

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
