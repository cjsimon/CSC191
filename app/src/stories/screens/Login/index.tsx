import * as React from "react";
import { Platform, StatusBar, Image } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View } from "native-base";
//import styles from "./styles";

export interface Props {
	loginForm: any;
	goCreate: Function;
	onLogin: Function;
	goBlank: Function;
}

//const deviceHeight = Dimensions.get("window").height;
//const deviceWidth = Dimensions.get("window").width;

//style={[{position: "absolute"},{top: 50}]}
//barStyle="light-content"
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 250, backgroundColor: "black" }}>
				<StatusBar barStyle="light-content"/>
					<Body style={{backgroundColor: "black"}}>
					<Image
							source={{ uri: "http://jetstox.com/wp-content/uploads/2018/03/Investing-With-Intelligence-5.png" }}
							style={{ width: 375, height: 75, backgroundColor: 'black' }}
						/>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>
						<Title> <Text style={{color: "white", fontSize: 25}}> Sign In </Text> </Title>
					</Body>
				</Header>
				<Content  style={{ height: 200, backgroundColor: "black" }} scrollEnabled={false}>
					{this.props.loginForm}
					<View padder >
						<Button rounded block success onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
					</View>
					<View padder>
						<Button block transparent success onPress={() => this.props.goCreate()}>
							<Text> Sign Up!</Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
		//THIS WAS IN FOOTER BUT I REMOVED IT FOR GUEST BUTTON OPTION

		/*
		http://jetstox.com/wp-content/uploads/2018/03/Investing-With-Intelligence-5.png
		<Button block onPress={() => this.props.guestLogin()}>
			<Text> Use as Guest </Text>
		</Button>

		<Icon name="jet" style={{fontSize: 104, color: "lightgreen"}}/>
		<Title style={{color: "lightgreen"}}>Welcome to JetStoxs</Title>
		*/
	}
}

export default Login;
