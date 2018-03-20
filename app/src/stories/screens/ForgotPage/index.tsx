import * as React from "react";
import { Platform } from "react-native";
import { Container, Toast, View, Form, Header, Input, Item, Title, Content, Text, Button, Icon, Left, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
var something = "";
class ForgotPage extends React.Component<Props, State> {

	sendEmail(){
		Toast.show({
			text: "Check your email for password",
			duration: 2000,
			position: "top",
			textStyle: { textAlign: "center" },
		});
		// CALL THE BACKEND FOR SENDING AN EMAIL
	}
	//style={[{position: "absolute"},{top: 45}]}
	render() {
		//const param = this.props.navigation.state.params;
		something = "";
		return (
			<Container style={styles.container}>
				<Header style={{ height: 200 }}>
				<Left>
					<Button transparent onPress={() => this.props.navigation.goBack()}>
						<Icon name="ios-arrow-back" />
					</Button>
				</Left>
				<Body >
					<Icon name="plane" style={{ fontSize: 104 }} />
					<Title>Forgot Password?</Title>
					<View padder>
						<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
					</View>
				</Body>
				</Header>
				<Form>
					<Item>
					<Icon name="mail"/>
					<Input
						onChangeText={text => { something = text}}
						defaultValue = {something}
						placeholder = "Email"
						editable = {true}
						maxLength = {2222}
					/>
					</Item>
				</Form>

				<Content>
				<View padder>
					<Button block onPress={() => this.sendEmail()}>
						<Text> Submit </Text>
					</Button>
				</View>

				<View padder style={[{bottom: 10},{left: 0}]}>
					<Button block onPress={() => {this.props.navigation.goBack()}}>
						<Text> Cancel </Text>
					</Button>
				</View>
				</Content>

			</Container>
		);
	}
}

export default ForgotPage;
