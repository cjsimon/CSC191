import * as React from "react";
import {StatusBar} from "react-native";
import { Container, Header, Title, Button, Icon, Text, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	displayForm: any;
}
export interface State {}
class SellPage extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
			<Header style={{backgroundColor: 'black', height: 100}}>
			<StatusBar barStyle="light-content"/>
				<Button transparent onPress={() => this.props.navigation.goBack()}>
					<Icon name="ios-arrow-back" style={{color: "white"}}/>
				</Button>
					<Body>
					<Title> <Text style={{color: "white"}}>Buy Page</Text> </Title>
					</Body>
			</Header>
			{this.props.displayForm}
			</Container>
		);
	}
}

export default SellPage;
