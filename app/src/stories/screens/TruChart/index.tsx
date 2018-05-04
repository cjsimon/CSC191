import * as React from "react";
import { StatusBar } from 'react-native';
import { Container, Card, Header, Button, Icon, Body, Right, Left, Footer } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	chart: any;
	title: any;
	filter: any;
}
export interface State {}



class TruChart extends React.Component<Props, State> {

	render() {
		return (
			<Container style={styles.container}>
				<Header searchBar style={{backgroundColor: 'black', height: 100}}>
				<StatusBar barStyle="light-content"/>
					<Left>
					<Button transparent onPress={() =>this.props.navigation.navigate("PortfolioDrawer")}>
						<Icon name="ios-arrow-back" style={{color: "white"}}/>
					</Button>
					</Left>
					<Body>
						{this.props.title}
					</Body>
					<Right />
				</Header>
				<Card style={{height: 10}}>
					{this.props.chart}
				</Card>

				<Footer>
					{this.props.filter}
				</Footer>
			</Container>
		);
	}
}
/*<Footer style={{height: 200}}>
{this.props.filter}
</Footer>*/
export default TruChart;
