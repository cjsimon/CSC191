import * as React from "react";
import { StatusBar} from 'react-native';
import { Container, Header, Text, Title, Button, Icon, Body, Right, Left } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	chart: any;
}
export interface State {}



class TruChart extends React.Component<Props, State> {

	render() {
		return (
			<Container style={styles.container}>
			<Header searchBar style={{backgroundColor: 'black', height: 100}}>
			<StatusBar barStyle="light-content"/>
				<Left>
				<Button transparent onPress={() =>this.props.navigation.goBack()}>
					<Icon name="ios-arrow-back" style={{color: "white"}}/>
				</Button>
				</Left>
				<Body>
					<Title><Text style={{color: "white"}}>TruChart</Text></Title>
				</Body>
				<Right />
			</Header>
			{this.props.chart}
			<Body style={{backgroundColor: 'black', height: 1000, width: 1000}}>
			</Body>
			</Container>
		);
	}
}

export default TruChart;
