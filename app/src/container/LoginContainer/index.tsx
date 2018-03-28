import * as React from "react";
import { Item, Input, Icon, Form, Toast, Button, Text, Label} from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "../../stories/screens/Login";
import {userInfo} from "../../container/CreatePageContainer";
import {accountCreate} from "../../container/SecurityQContainer";


export interface Props {
	navigation: any;
	valid: boolean;
}

export var userStuff;
var passable = false;
export interface State {}
class LoginForm extends React.Component<Props, State> {
	textInput: any;

	guestLogin() {
		this.props.navigation.navigate("Drawer");
		Toast.show({
			text: "Welcome Guest.\n Please Consider Creating an account.\n Info will not be saved.",
			duration: 2000,
			position: "top",
			textStyle: { textAlign: "center" },
		});
	}
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
	login() {
		fetch("http://localhost:5000/api/v1/demo/")
	  .then(function(response) {
			//alert(response)
			return response.json();
	  }).then(function(data) {
			for(var i=0; i<data.length; i++)
			{
				if(userInfo[0] == data[i].username && userInfo[2] == data[i].password)
				{
					userStuff = data[i];
					//alert(userStuff.username)
					passable = true;
				}
			}
		})

		if(passable)
		{
			this.props.navigation.navigate("AskQV");
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
	sup() {
		alert("SUP BOI")
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
		return <Login loginForm={form} guestLogin={() => this.guestLogin()}
		goCreate={() => this.accountCreate()}
		onLogin={() => this.login()} goBlank={() =>this.goBlank()} />;
	}
}
const LoginContainer = reduxForm({
	form: "login",
})(LoginForm);
export default LoginContainer;
