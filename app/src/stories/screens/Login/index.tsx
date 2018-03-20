import * as React from "react";
import { Platform, Dimensions } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
//import styles from "./styles";

export interface Props {
	loginForm: any;
	goCreate: Function;
	onLogin: Function;
	goBlank: Function;
	guestLogin: Function;
}

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

//style={[{position: "absolute"},{top: 50}]}

export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body >
						<Icon name="plane" style={{fontSize: 104}}/>
						<Title>Welcome to JetStoxs</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder style={[{left: 75},{flexDirection: "row"}]}>
						<Button style={{right: 15}}onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
						<Button onPress={() => this.props.goBlank()}>
							<Text> Forgot Password </Text>
						</Button>
					</View>
					<View padder>
						<Button block onPress={() => this.props.goCreate()}>
							<Text>Create Account</Text>
						</Button>
					</View>
					<View padder style={[{bottom: -deviceHeight/3},{left: deviceWidth/3.5}]}>
						<Button onPress={() => this.props.guestLogin()}>
							<Text> Use as Guest </Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<Text>  </Text>
				</Footer>
			</Container>
		);
		//THIS WAS IN FOOTER BUT I REMOVED IT FOR GUEST BUTTON OPTION

		/*
		<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
			<View padder>
				<Text style={{ color: "#000" }}>Made with love at </Text>
			</View>
			<Image
				source={{ uri: "https://geekyants.com/images/logo-dark.png" }}
				style={{ width: 422 / 4, height: 86 / 4 }}
			/>
		</View>
		*/
	}
}

export default Login;
