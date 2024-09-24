import * as React from "react";
import { StatusBar} from 'react-native';
import { Container,View, Header, Card, CardItem, Title, Content, Text,Right, Left, Button, Icon, Body } from "native-base";


import styles from "./styles";
export interface Props {
	navigation: any;
	askForm: any;
	validAns: Function;
	form2: any;
}
export interface State {}
class AskQV2 extends React.Component<Props, State> {
	render() {
		//const param = this.props.navigation.state.params;
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
					<Title> <Text style={{color: "white"}}>Security Question</Text> </Title>
					</Body>
				<Right/>
			</Header>
			<Content style={{top: 150, backgroundColor: 'black'}} scrollEnabled={false}>
					<Card>
					{this.props.askForm}
					<CardItem>
						{this.props.form2}
					</CardItem>
					</Card>
					<View padder style={[{bottom: 0},{left: 0}]}>
						<Button rounded block success onPress={() => this.props.validAns()}>
							<Text> Submit </Text>
						</Button>
					</View>
					<View padder style={[{bottom: 0},{left: 0}]}>
						<Button rounded block success onPress={() => this.props.navigation.goBack()}>
							<Text> Cancel </Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default AskQV2;
