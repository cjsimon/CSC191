import * as React from "react";
import { Platform,StatusBar} from "react-native";
import { Container, Card, CardItem, Header, Toast, Title, View, Content, Text, Button, Icon, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}

class AccountSetting extends React.Component<Props, State> {
	toBeContinued() {
		Toast.show({
			text: "Current In Progress. Stay tunned in for future updates",
			duration: 2000,
			position: "top",
			textStyle: { textAlign: "center" },
		});
	}

	render() {
		return (
			<Container style={styles.container}>
			<Header style={{backgroundColor: 'black', height: 100}}>
			<StatusBar barStyle="light-content"/>
				<Button transparent onPress={() => this.props.navigation.goBack()}>
					<Icon name="ios-arrow-back" style={{color: "white"}}/>
				</Button>
					<Body>
					<Title> <Text style={{color: "white"}}>Account Settings</Text> </Title>
					</Body>
			</Header>
				<Content padder>
					<Body>
					<Button transparent disabled success style={{backgroundColor: "black"}}>
						<Text>Account Info</Text>
					</Button>
						<Card style={{width: 350}}>
							<CardItem style={{backgroundColor: "white"}}>
									<Button transparent
									onPress={() => this.props.navigation.navigate("AskQV2")}>
										<Text style={{color: "black"}}> Update E-mail, username, password </Text>
									</Button>
							</CardItem>
							<CardItem style={{backgroundColor: "white"}}>
									<Button transparent
									onPress={() => this.props.navigation.navigate("Notification")}>
										<Text style={{color: "black"}}> Notification Settings </Text>
									</Button>
							</CardItem>
							<CardItem style={{backgroundColor: "white"}}>
									<Button full transparent onPress={() => this.toBeContinued()}>
										<Text style={{color: "black"}}>Connect Brokerage Account</Text>
									</Button>
							</CardItem>
						</Card>



						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>

					</Body>
				</Content>

			</Container>
		);
	}
}

export default AccountSetting;
