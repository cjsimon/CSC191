import * as React from "react";
import UpdateInfo from "../../stories/screens/UpdateInfo";
import {userStuff} from "../../container/LoginContainer";
import { Form, Item, Input, Toast, Label } from "native-base";
import { Field, reduxForm} from "redux-form";

export interface Props {
	navigation: any;
}
export interface State {}

export var userInfo = ["","","","",""];
var tmpPass;
//var passable = false;
class UpdateInfoForm extends React.Component<Props, State> {
	initalUser(){
		userInfo[0] = "";
		userInfo[1] = "";
		userInfo[2] = "";
		userInfo[3] = "";
		userInfo[4] = "";
		tmpPass = "";
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

	isValid() {
		var ans = ""
		ans += this.validUsername();
		ans += this.validEmail();
		ans += this.validPassword();
		return ans;
	}

	onCreate() {
		var ans = this.isValid();
		//const {navigate} = this.props.navigation;

		// KILL IT WITH FIRE aka
		// POST EVERYTHING REPLACE IN DB AND RETURN STRING IN JSON WITH RESULTS
		//162.229.170.225:13337

		fetch("http://localhost:5000/api/v1/UserAccountApplicationVerification", {
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
				fetch("http://localhost:5000/api/v1/Update", {
					method: 'POST',
					headers :
					{
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						username: userInfo[0],
						email: userInfo[1],
						oldemail: userStuff.email,
						password: userInfo[2]})
				}).then(function(response){
					return response.json();
				})

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

	offCreate() {
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

	render() {
		this.initalUser();
		const form = (
			<Form>
			<Field name="username" component={this.renderUsername} validate={[]}/>
			<Field name="email" component={this.renderEmail} validate={[]}/>
			<Field name="password" component={this.renderPassword} validate={[]}/>
			<Field name="password" component={this.renderConfirmPassword} validate={[]}/>
			</Form>
		);
		return <UpdateInfo showCreate={form} navigation={this.props.navigation} onCreate={() => this.onCreate()}
		offCreate={() => this.offCreate()}/>;
	}
}
const UpdateInfoContainer = reduxForm({
	form: 'updateinfo'
})(UpdateInfoForm);
export default UpdateInfoContainer;
