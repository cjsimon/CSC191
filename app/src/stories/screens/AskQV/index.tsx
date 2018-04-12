import * as React from "react";
import { StatusBar} from 'react-native';
import { Container,View, Header,Input,Item, Card, CardItem, Title, Content, Text, Button, Icon, Body } from "native-base";


import styles from "./styles";
export interface Props {
	navigation: any;
	askForm: any;
	validAns: Function;
}
export interface State {}
export var something = "";
class AskQV extends React.Component<Props, State> {
	render() {
		//const param = this.props.navigation.state.params;
		something = "";
		return (
			<Container style={styles.container}>
			<Header searchBar style={{backgroundColor: 'black', height: 100}}>
			<StatusBar barStyle="light-content"/>
				<Button transparent onPress={() =>this.props.navigation.goBack()}>
					<Icon name="ios-arrow-back" style={{color: "white"}}/>
				</Button>
					<Body>
					<Title> <Text style={{color: "white"}}>Security Question</Text> </Title>
					</Body>
			</Header>
				<Content style={{top: 150, backgroundColor: 'black'}} scrollEnabled={false}>
					<Card>
					{this.props.askForm}
					<CardItem>
						<Item>
						<Input
							onChangeText={text => {something = text}}
							placeholder ="Answer"
							defaultValue = {something}
							editable = {true}
							maxLength = {2222}
						/>
						</Item>
					</CardItem>
					</Card>
					<View padder style={[{bottom: 0},{left: 0}]}>
						<Button rounded block success onPress={() => this.props.validAns(something)}>
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

export default AskQV;
