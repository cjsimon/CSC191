import * as React from "react";
import { Container, Header, Title, Content, Text,Button, Icon, Toast, Left, Right, Body, Footer, FooterTab } from "native-base";
import {StatusBar,ScrollView,Image} from 'react-native';

import styles from "./styles";
export interface Props {
	navigation: any;
	searchForm: any;
	renderHistory: any;
	renderPortfolio: any;
	monitor: any;
}
export interface State {}
class Portfolio extends React.Component<Props, State> {
	// CHANGE THE ACCOUNT MONITOR STUFF

	toBeContinued() {
		Toast.show({
			text: "Current In Progress. Stay tunned in for future updates",
			duration: 2000,
			position: "top",
			textStyle: { textAlign: "center" },
		});
	}

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
			{this.props.monitor}

			{this.props.searchForm}

			{this.props.renderPortfolio}


			<Text>{"\n"}</Text>
			{this.props.renderHistory}
			<Button full success onPress={() => this.toBeContinued()}><Text>Link Tradier Account</Text></Button>
			</ScrollView>
			</Content>
			<Footer>
				<FooterTab style={{backgroundColor: "black"}}>
					<Button vertical onPress={() => this.props.navigation.navigate('PortfolioDrawer')}>
						<Icon name="person" style={{color: "white"}}/>
						<Text>Portfolio</Text>
					</Button>
					<Button vertical onPress={() => this.props.navigation.navigate('Drawer')}>
						<Image
		          style={{width: 40, height: 20}}
		          source={{uri: "http://jetstox.com/wp-content/uploads/2018/02/Investing-With-Intelligence-2.png"}}
		        />
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
