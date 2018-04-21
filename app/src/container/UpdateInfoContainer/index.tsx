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
var passable = false;
class UpdateInfoForm extends React.Component<Props, State> {
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
	isValid() {
		var ans = ""
		ans += this.validUsername();
		ans += this.validEmail();
		ans += this.validPassword();
		return ans;
	}
	onCreate() {
		var ans = this.isValid();
		var tmpId = -1
		var ans = this.isValid();
		const {navigate} = this.props.navigation;
		fetch("http://localhost:3000/users")
		.then(function(response) {
			return response.json();
		}).then(function(data) {
			for(var i=0; i<data.length; i++)
			{
				if(userInfo[0] == data[i].username && userStuff.username != data[i].username)
				{
					ans += "This User Exists. Please Enter a Valid Username\n"
				}

				if(userInfo[1] == data[i].email && userStuff.username != data[i].username)
				{
					ans += "This Email Exists. Please Enter a Valid Email\n"
				}
			}
		}).then(function() {
			if(ans == "")
			{
				fetch("http://localhost:3000/users")
			  .then(function(response) {
					return response.json();
			  }).then(function(data) {
					for(var i=0; i<data.length; i++)
					{
						if(userStuff.username == data[i].username && userStuff.password == data[i].password
							&& userStuff.email == data[i].email)
						{
							tmpId = data[i].id;
							passable = true;
							fetch("http://localhost:3000/users/" + tmpId, {
								method: 'delete'
							}).then(response =>
								response.json().then(json => {
									return json;
								})
							)
						}
					}
				}).then( () => {
						if(passable)
						{
							passable = false;
							userStuff.username = userInfo[0];
							userStuff.email = userInfo[1];
							userStuff.password = userInfo[2];
							navigate("Drawer");
							fetch("http://localhost:3000/users/", {
								method: 'POST',
								headers :
								{
								'Accept': 'application/json',
								'Content-Type': 'application/json',
								},
								body: JSON.stringify({
								username: userInfo[0],
								email: userInfo[1],
								password: userInfo[2],
								phone: userStuff.phone,
								bday: userStuff.bday,
								q1: userStuff.q1,
								a1: userStuff.a1,
								q2: userStuff.q2,
								a2: userStuff.a2,
								q3: userStuff.q3,
								a3: userStuff.a3,
								id: tmpId})
							})
							Toast.show({
								text: "Thank you for updating "+userStuff.username,
								duration: 2000,
								position: "top",
								textStyle: { textAlign: "center" },
							});
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
