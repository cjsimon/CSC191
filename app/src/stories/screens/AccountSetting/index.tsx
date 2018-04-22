import * as React from "react";
import { Platform,StatusBar} from "react-native";
import { Container, Card, CardItem, Header, Title, View, Content, Text, Button, Icon, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}

class AccountSetting extends React.Component<Props, State> {
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
							<CardItem  style={{backgroundColor: "white"}}>
								<Button full transparent onPress={() => this.props.navigation.navigate("BlankPage")}>
									<Text style={{color: "black"}}> Privacy Policy </Text>
								</Button>
							</CardItem>
						</Card>

						<Button transparent disabled success style={{backgroundColor: "black"}}>
						<Text>Linked</Text>
						</Button>
						<Card style={{width: 350}}>
							<CardItem style={{backgroundColor: "white"}}>
									<Button full transparent >
										<Text style={{color: "black"}}>Linked Stuff</Text>
									</Button>
							</CardItem>
							<CardItem style={{backgroundColor: "white"}}>
									<Button full transparent >
										<Icon name="add" style={{color: "black"}}/>
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
