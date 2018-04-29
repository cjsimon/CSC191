import * as React from "react";
import { Platform, StatusBar, Image } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Container, Content, Header, Body, Title, Button, Text, View } from "native-base";
import styles from "./styles";

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
				<KeyboardAwareScrollView
				style={{ backgroundColor: 'black' }}
				resetScrollToCoords={{ x: 0, y: 0 }}
				contentContainerStyle={styles.container}
				scrollEnabled={false}
				>
				<Content  style={{ height: 200, backgroundColor: "black" }} scrollEnabled={false}>
				<Header style={{height: 210, backgroundColor: "black" }}>
				<StatusBar barStyle="light-content"/>
					<Body style={{backgroundColor: "black"}}>
					<View style={{height: 50}}>
					<Image
							source={{ uri: "http://jetstox.com/wp-content/uploads/2018/03/JETSTOXWEBLOGO-1.png" }}
							style={{ width: 360, height: 50, backgroundColor: 'black' }}
						/>
					</View>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>
						<Title> <Text style={{color: "white", fontSize: 25}}> Sign In </Text> </Title>
					</Body>
				</Header>
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
				</KeyboardAwareScrollView>
			</Container>
		);
	}
}

export default Login;
