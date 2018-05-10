import * as React from "react";
import { Form, Item, Input, Toast, Label } from "native-base";
import { Field, reduxForm} from "redux-form";
import {fetchUrl} from "../../container/LoginContainer";
import CreatePage from "../../stories/screens/CreatePage";
export interface Props {
	valid: boolean;
	navigation: any;
}
export var userInfo = ["","","","",""];
var tmpPass = "";
export interface State {}
class CreatePageForm extends React.Component<Props, State> {
	textInput: any;
	onCreate(){
		var ans = this.isValid();
		const {navigate} = this.props.navigation;
		// needs to send front end data validated and sent to fetch for determined to be entered or error
		// post user/pass return json string

		// PUT BACK LATER 162.229.170.225:13337
		fetch("http://"+fetchUrl+"/api/v1/UserAccountApplicationVerification", {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({username: userInfo[0],email: userInfo[1]}),
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			ans += data.message
			if(ans == "")
			{
				navigate("SecurityQ")
			}
			else
			{
				Toast.show({
					text: ans,
					duration: 2000,
					position: "top",
					textStyle: { textAlign: "center" },
				});
			}
		})
	}

	initalUser(){
		userInfo[0] = ""
		userInfo[1] = ""
		userInfo[2] = ""
		userInfo[3] = ""
		userInfo[4] = ""
		tmpPass = ""
	}

	validUsername() {
		var ans = "";
		if(userInfo[0] == "")
		{
			ans += "Please Enter a valid Username\n"
		}
		return ans;
	}

	validEmail() {
		var ans = "";
		if(userInfo[1] == "")
		{
			ans += "Please Enter a valid Email\n"
			return ans;
		}
		if(!/([a-z0-9A-Z!#$%&'*+-/=?^_`{|}~\.]+)@([a-z0-9A-Z]+\.)+[a-z0-9A-Z]/.test(userInfo[1]))
			ans += "Please Enter a '.' and/or '@' for valid Email\n"
		return ans;
	}

	validPassword(){
		var ans = "";
		if(userInfo[2] == "" && tmpPass == userInfo[2])
		{
			ans += "Please Enter a valid Password\n"
			return ans;
		}
		if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(userInfo[2]))
			ans += "Please Enter at least 8 characters that contain at least a number and symbol\n"
		return ans
	}

	validPhone() {
		var ans = "";
		if(userInfo[3] == "")
		{
			ans += "Please Enter a valid Phonenumber\n"
			return ans;
		}
		if(!/\(\d\d\d\)-\d\d\d-\d\d\d\d/.test(userInfo[3]) && !/\d\d\d\d\d\d\d\d\d\d/.test(userInfo[3]))
			ans += "Please Enter a valid Digit and/or (***)-***-**** format\n"
		return ans;
	}

	validBday(){
		var ans = "";
		if(userInfo[4] == "")
		{
			ans += "Please Enter a valid Birthday\n";
			return ans;
		}
		if(!/\d\d\/\d\d\/\d\d\d\d/.test(userInfo[4]) && !/\d\d\d\d\d\d\d\d/.test(userInfo[4]))
			ans += "Please Enter a valid Digit and/or mm/dd/yyyy format\n"
		else if(/\d\d\/\d\d\/\d\d\d\d/.test(userInfo[4]))
			userInfo[4] =
			userInfo[4].charAt(0)
			+userInfo[4].charAt(1)
			+userInfo[4].charAt(3)
			+userInfo[4].charAt(4)
			+userInfo[4].charAt(6)
			+userInfo[4].charAt(7)
			+userInfo[4].charAt(8)
			+userInfo[4].charAt(9)
			+userInfo[4].charAt(10)
		return ans;
	}

	isValid() {
		var ans = ""
		ans += this.validUsername();
		ans += this.validEmail();
		ans += this.validPassword();
		ans += this.validPhone();
		ans += this.validBday();
		return ans;
	}

	offCreate(){
		Toast.show({
			text: "Account isn't created",
			duration: 2000,
			position: "top",
			textStyle: { textAlign: "center" },
		})
		this.props.navigation.goBack();
	}

	renderUsername(){
		return (
			<Item stackedLabel>
			<Label style={{color: "lightgreen"}}>Username</Label>
			<Input
			  style={{color: "lightgreen"}}
				onChangeText={text => {userInfo[0] = text}}
				defaultValue = {userInfo[0]}
				editable = {true}
				maxLength = {2222}
			/>
			</Item>
		)
	}

	renderEmail(){
		return (
			<Item stackedLabel>
			<Label style={{color: "lightgreen"}}>Email</Label>
			<Input
				style={{color: "lightgreen"}}
				onChangeText={text => {userInfo[1] = text}}
				defaultValue = {userInfo[1]}
				editable = {true}
				maxLength = {2222}
			/>
			</Item>
		)
	}

	renderPassword(){
		return(
			<Item stackedLabel>
			<Label style={{color: "lightgreen"}}>Password</Label>
			<Input
				style={{color: "lightgreen"}}
				onChangeText={text => {userInfo[2] = text}}
				defaultValue = {userInfo[2]}
				editable = {true}
				secureTextEntry = {true}
				maxLength = {2222}
			/>
			</Item>

		)
	}

	renderConfirmPassword() {
		return(
			<Item stackedLabel>
			<Label style={{color: "lightgreen"}}>Confirm Password</Label>
			<Input
				style={{color: "lightgreen"}}
				onChangeText={text => {tmpPass = text}}
				defaultValue = {tmpPass}
				editable = {true}
				secureTextEntry = {true}
				maxLength = {2222}
			/>
			</Item>
		)
	}

	renderPhone(){
		return (
			<Item stackedLabel>
			<Label style={{color: "lightgreen"}}>Phone Number</Label>
			<Input
				style={{color: "lightgreen"}}
				onChangeText={text => {userInfo[3] = text}}
				defaultValue = {userInfo[3]}
				placeholder = "(***)-***-****"
				editable = {true}
				maxLength = {2222}
			/>
			</Item>
		)
	}

	renderBirth(){
		return (
			<Item stackedLabel>
			<Label style={{color: "lightgreen"}}>Date of Birth</Label>
			<Input
				style={{color: "lightgreen"}}
				onChangeText={text => {userInfo[4] = text}}
				defaultValue = {userInfo[4]}
				editable = {true}
				placeholder = "mm/dd/yyyy"
				maxLength = {2222}
			/>
			</Item>
		)
	}

	render() {
		this.initalUser();
		const form = (
			<Form>
			<Field name="username" component={this.renderUsername} validate={[]}/>
			<Field name="email" component={this.renderEmail} validate={[]}/>
			<Field name="password" component={this.renderPassword} validate={[]}/>
			<Field name="password" component={this.renderConfirmPassword} validate={[]}/>
			<Field name="phonenumber" component={this.renderPhone} validate={[]}/>
			<Field name="birthday" component={this.renderBirth} validate={[]}/>
			</Form>
		);
		return <CreatePage showCreate={form} navigation={this.props.navigation} onCreate={() => this.onCreate()}
		offCreate={() => this.offCreate()}/>;
	}
}
const CreatePageContainer = reduxForm({
	form: 'createpage'
})(CreatePageForm);
export default CreatePageContainer;
