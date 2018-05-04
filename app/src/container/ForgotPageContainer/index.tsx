import * as React from "react";
import ForgotPage from "../../stories/screens/ForgotPage";
import { Toast, Content, Item, Label, Input, View, Button, Text } from "native-base";
export interface Props {
	navigation: any;
}
export interface State {}

export default class ForgotPageContainer extends React.Component<Props, State> {
	sendEmail(target) {
		Toast.show({
			text: "Check your email temporary for password",
			duration: 2000,
			position: "top",
			textStyle: { textAlign: "center" },
		});
		fetch("http://localhost:5000/api/v1/email1", {
			method: 'POST',
			headers :
			{
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			},
			body: JSON.stringify({"email":target})
		})
	}
	render() {
		var something = ""
		const form1 = (
			<Content style={{ height: 200, backgroundColor: "black" }} scrollEnabled={false}>
			<Item stackedLabel>
			<Label style={{color: "lightgreen"}}>Email</Label>
			<Input
			style={{color: "lightgreen"}}
				onChangeText={text => {something = text}}
				editable = {true}
				maxLength = {2222}
				defaultValue = {something}
			/>
			</Item>
			<View padder>
				<Button rounded block success  onPress={() => this.sendEmail(something)}>
					<Text> Submit </Text>
				</Button>
			</View>

			<View padder style={[{bottom: 10},{left: 0}]}>
				<Button rounded block success onPress={() => {this.props.navigation.goBack()}}>
					<Text> Cancel </Text>
				</Button>
			</View>
			</Content>
		)
		return <ForgotPage emailSend={form1} navigation={this.props.navigation} />;
	}
}
