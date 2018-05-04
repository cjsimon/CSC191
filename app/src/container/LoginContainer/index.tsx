import * as React from "react";
import { Item, Input, Icon, Form, Toast, Button, Text, Label} from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "../../stories/screens/Login";
import {userInfo} from "../../container/CreatePageContainer";
import {accountCreate} from "../../container/SecurityQContainer";
import {setStock} from "../../container/PortfolioContainer"

export interface Props {
	navigation: any;
	valid: boolean;
}

export var userStuff;
var passable = false;
export interface State {}
class LoginForm extends React.Component<Props, State> {
	textInput: any;

  accountCreate() {
			this.props.navigation.navigate("CreatePage");
	}
	goBlank(){
		this.props.navigation.navigate("ForgotPage");
	}
	renderInput({ input, meta: { touched, error } }) {
		return (
			<Item error={error && touched}>
				<Icon active name={input.name === "email" ? "person" : "unlock"} />
				<Input
					ref={c => (this.textInput = c)}
					placeholder={input.name === "email" ? "Email" : "Password"}
					secureTextEntry={input.name === "password" ? true : false}
					{...input}
				/>
			</Item>
		);
	}
	navigateToQuestions() {
		this.props.navigation.navigate("AskQV");
	}
	passable(navigate) {
		if(passable)
		{
			navigate("Drawer");
			passable = false;
		}
		else
		{
			Toast.show({
				text: "Enter Valid Username and/or Password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}
	login() {

		const {navigate} = this.props.navigation;
		// JUST READ FROM THE DATABASE POST REQUEST TO THE BACKEND TO DETERMINE TRUE OR FALSE IF VALID LOGIN
		// POST USER/PASS RETURN VALID T/F AND ROW WITHOUT SECURITY PLUS ONE Q
		fetch("http://localhost:5000/api/v1/user/")
	  .then(function(response) {
			return response.json();
	  }).then(function(data) {
			for(var i=0; i<data.length; i++) // MIGHT NEED TO CHANGE WITH THE BACKEND
			{
				if(userInfo[0] == data[i].username && userInfo[2] == data[i].password)
				{
					userStuff = data[i];
					passable = true;
				}
			}
		}).then( () => {
				if(passable)
				{
					// MAGIC HAND WAVE MIGHT NOT BE THERE
					// RETURNS LIST OF STOCKS AND AMMOUNTS
					fetch("http://localhost:5000/api/v1/stocks/").then(function(response) {
						return response.json();
				  }).then(function(data) {
						var i=0;
						var tmp;
						for(i=0; i<data.length; i++)
						{
							tmp = [data[i].code+"",data[i].name + "",data[i].change + "",data[i].changeP + "",data[i].TodayPrice+"",data[i].shares]
							setStock(tmp)
						}
						navigate("AskQV");
						passable = false;
					})
				}
				else
				{
					Toast.show({
						text: "Enter Valid Username and/or Password!",
						duration: 2000,
						position: "top",
						textStyle: { textAlign: "center" },
					});
				}
    });
	}
	renderUsername(){
		if(accountCreate)
		{
			return (
				<Item stackedLabel>
				<Label style={{color: "lightgreen"}}>Username</Label>
				<Input
				style={{color: "lightgreen"}}
					onChangeText={text => {userInfo[0] = text}}
					editable = {true}
					maxLength = {2222}
					defaultValue = {accountCreate === true ? userInfo[0]:""}
				/>
				</Item>
			)
		}
		else
		{
			return (
				<Item stackedLabel>
				<Label style={{color: "lightgreen"}}>Username</Label>
				<Input
				style={{color: "lightgreen"}}
					onChangeText={text => {userInfo[0] = text}}
					editable = {true}
					maxLength = {2222}
				/>
				</Item>
			)
		}
	}

	renderPassword(){
		return(
			<Item stackedLabel>
			<Label style={{color: "lightgreen"}}>Password</Label>
			<Item style={{borderBottomWidth: 0}}>
			<Input
				style={{color: "lightgreen"}}
				onChangeText={text => {userInfo[2] = text}}
				editable = {true}
				secureTextEntry = {true}
				maxLength = {2222}
			/>
			<Button onPress={() => this.props.navigation.navigate("ForgotPage")}>
			<Text> asdf </Text>
			</Button>
			</Item>
			</Item>
		)
	}

	render() {

		const form = (
			<Form>
				<Field name={userInfo[0]} component={this.renderUsername} validate={[]} /* {[email, required]} *//>

				<Item stackedLabel>
				<Label style={{color: "lightgreen"}}>Password</Label>
				<Item style={{borderBottomWidth: 0}}>
				<Input
					style={{color: "lightgreen"}}
					onChangeText={text => {userInfo[2] = text}}
					editable = {true}
					secureTextEntry = {true}
					maxLength = {2222}
				/>
				<Button transparent success onPress={() => this.props.navigation.navigate("ForgotPage")}>
					<Text>I Forgot</Text>
				</Button>
				</Item>
				</Item>
			</Form>
		);
		return <Login loginForm={form}
		goCreate={() => this.accountCreate()}
		onLogin={() => this.login()} goBlank={() =>this.goBlank()} />;
	}
}
const LoginContainer = reduxForm({
	form: "login",
})(LoginForm);
export default LoginContainer;
