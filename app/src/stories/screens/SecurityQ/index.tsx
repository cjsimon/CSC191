import * as React from "react";
import { StatusBar} from 'react-native';
import { Container, Toast, Card, CardItem, Header, View,Item,Input, Title, Content, Text, Button, Icon, Body } from "native-base";
import styles from "./styles";


export interface Props {
	navigation: any;
	username: any;
	accountValid: any;
	accountNot: any;
}
export interface State {}

var sampleQ = [
	"What was your childhood nickname?",
	"What is the name of your favorite childhood friend?",
	"In what city or town did your mother and father meet?",
	"What is the middle name of your oldest child?",
	"What is your favorite team?",
	"What was your favorite sport in high school?",
	"What was your favorite food as a child?",
	"What is the first name of the boy or girl that you first kissed?",
	"What was the make and model of your first car?",
	"What was the name of the hospital where you were born?",
	"Who is your childhood sports hero?",
	"What school did you attend for sixth grade?",
	"What was the last name of your third grade teacher?",
	"In what town was your first job?",
	"What was the name of the company where you had your first job?",
];
export var qid = [0,0,0];
export var userQ = ["","",""];
export var answersSQ = ["","",""];

class SecurityQ extends React.Component<Props, State> {

	setIndex() {
		var tmp1 = Math.floor((Math.random()*15));
		var tmp2 = Math.floor((Math.random()*15));
		var tmp3 = Math.floor((Math.random()*15));
		while(tmp1 == tmp2 || tmp1 == tmp3 || tmp2 == tmp3)
		{
			tmp1 = Math.floor((Math.random()*15));
			tmp2 = Math.floor((Math.random()*15));
			tmp3 = Math.floor((Math.random()*15));
		}
		qid = [tmp1,tmp2,tmp3];
	}
	setupQ(){
		qid = [0,0,0];
		userQ = ["","",""];
		answersSQ = ["","",""];
		this.setIndex();
		userQ = [sampleQ[qid[0]],sampleQ[qid[1]],sampleQ[qid[2]]];
	}
	goLoginSuc(){
		if(answersSQ[0] != "" && answersSQ[1] != "" && answersSQ[2] != "")
		{
			Toast.show({
				text: "Thank you "+this.props.username()+"!\n"+"Please Login with your Password.",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
			this.props.accountValid();
			this.props.navigation.navigate("Login")
		}
		else
		{
			Toast.show({
				text: "Please put an answer for all questions",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}
	goLoginFail(){
		this.props.navigation.goBack();

	}
	render() {
		//const param = this.props.navigation.state.params;
		this.setupQ();

		return (
			<Container style={styles.container}>
			<Header searchBar style={{backgroundColor: 'black',height: 100}}>
			<StatusBar barStyle="light-content"/>
				<Button transparent onPress={() =>this.props.navigation.goBack()}>
					<Icon name="ios-arrow-back" style={{color: "white"}}/>
				</Button>
					<Body>
					<Title> <Text style={{color: "white"}}>Security Questions </Text></Title>
					</Body>
			</Header>
			<Content scrollEnabled={false} style={{backgroundColor: 'black'}}>
				<Card>
					<CardItem>
						<Text>{userQ[0]}</Text>
					</CardItem>
					<Item>
						<Input
							onChangeText={text => {answersSQ[0] = text}}
							placeholder ="Answer 1"
							defaultValue = {answersSQ[0]}
							editable = {true}
							maxLength = {2222}
						/>
					</Item>
				</Card>
				<Card>
					<CardItem>
						<Text>{userQ[1]}</Text>
					</CardItem>
					<Item>
						<Input
							onChangeText={text => {answersSQ[1] = text}}
							placeholder ="Answer 2"
							defaultValue = {answersSQ[1]}
							editable = {true}
							maxLength = {2222}
						/>
					</Item>
				</Card>
				<Card>
					<CardItem>
						<Text>{userQ[2]}</Text>
					</CardItem>
					<Item>
						<Input
							onChangeText={text => {answersSQ[2] = text}}
							placeholder ="Answer 3"
							defaultValue = {answersSQ[1]}
							editable = {true}
							maxLength = {2222}
						/>
					</Item>
				</Card>
					<View padder style={[{bottom: 0},{left: 0}]}>
						<Button rounded block success onPress={() => this.goLoginSuc()}>
							<Text> Create Account </Text>
						</Button>
					</View>
					<View padder style={[{bottom: 0},{left: 0}]}>
						<Button rounded block success onPress={() => this.goLoginFail()}>
							<Text> Cancel </Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default SecurityQ;
