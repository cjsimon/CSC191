import * as React from "react";
import { Item, Input, Icon, Form, Toast} from "native-base";
import { Field, reduxForm } from "redux-form";
import Login from "../../stories/screens/Login";
import {userInfo} from "../../container/CreatePageContainer";
import {accountCreate} from "../../container/SecurityQContainer";


export interface Props {
	navigation: any;
	valid: boolean;
}

var valid_admin = "Admin"
var valid_password = "12345"

export interface State {}
class LoginForm extends React.Component<Props, State> {
	textInput: any;

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
		if (userInfo[0] == valid_admin && userInfo[2] == valid_password) {
			this.props.navigation.navigate("AskQV");
		} else {
			Toast.show({
				text: "Enter Valid Username & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}

	renderUsername(){
		if(accountCreate)
		{
			return (
				<Item>
				<Icon active name="person" />
				<Input
					onChangeText={text => {userInfo[0] = text}}
					placeholder = {"Username"}
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
				<Item>
				<Icon active name="person" />
				<Input
					onChangeText={text => {userInfo[0] = text}}
					placeholder ={"Username"}
					editable = {true}
					maxLength = {2222}
				/>
				</Item>
			)
		}
	}

	renderPassword(){
		return(
			<Item>
			<Icon active name="unlock" />
			<Input
				onChangeText={text => {userInfo[2] = text}}
				placeholder = "Password"
				editable = {true}
				secureTextEntry = {true}
				maxLength = {2222}
			/>
			</Item>
		)
	}
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
	render() {
		const form = (
			<Form>
				<Field name={userInfo[0]} component={this.renderUsername} validate={[]} /* {[email, required]} *//>
				<Field
					name={userInfo[3] === "" ? "Password" : userInfo[3]}
					component={this.renderPassword}
					validate={[]} /* {[alphaNumeric, minLength8, maxLength15, required]} */
				/>
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
