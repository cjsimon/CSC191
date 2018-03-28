import * as React from "react";
import { Platform,StatusBar} from "react-native";
import { Container, Card, CardItem, Header, Title, View, Content, Text, Button, Icon, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
//var something = "";

class AccountSetting extends React.Component<Props, State> {
	render() {
		//const param = this.props.navigation.state.params;
		//style={{ height: 100, backgroundColor: 'black'}} HEADER
		//style={{color: "white"}} TITLE
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
									onPress={() => this.props.navigation.navigate("AskQV")}>
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
									<Button transparent
									onPress={() => this.props.navigation.navigate("ManageAccount")}>
										<Text style={{color: "black"}}> Manage Account Changes </Text>
									</Button>
							</CardItem>
						</Card>
					<Button transparent disabled success style={{backgroundColor: "black"}}>
						<Text>Privacy Filter</Text>
					</Button>
						<Card style={{width: 350}}>
							<CardItem  style={{backgroundColor: "white"}}>
								<Button full transparent
								onPress={() => this.props.navigation.navigate("ProfileVis")}>
									<Text style={{color: "black"}}>Set Profile Visibility </Text>
								</Button>
							</CardItem>
							<CardItem style={{backgroundColor: "white"}}>
								<Button full transparent
								onPress={() => this.props.navigation.navigate("ManageBlock")}>
									<Text style={{color: "black"}}> Managed Blocked Users </Text>
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

/* Old stuff from wireframe
<Card>
	<CardItem header>
		<Title >Account Settings</Title>
	</CardItem>
</Card>

<Footer>
	<FooterTab style={{backgroundColor: "black"}}>
		<Button vertical>
			<Icon name="apps" style={{color: "white"}}/>
			<Text>Apps</Text>
		</Button>
		<Button vertical>
			<Icon name="camera" style={{color: "white"}}/>
			<Text>Camera</Text>
		</Button>
		<Button vertical>
			<Icon active name="navigate" style={{color: "white"}}/>
			<Text>Navigate</Text>
		</Button>
		<Button vertical>
			<Icon name="person" style={{color: "white"}}/>
			<Text>Contact</Text>
		</Button>
	</FooterTab>
</Footer>



<Card>
	<View style={{
	borderBottomWidth: 1,
	borderBottomColor: 'greenyellow',
	width: 350,
	}}>
	<Title> Account Info</Title>
	</View>

	<CardItem cardBody>
		<Text> THIS IS JUST A THING
		asdfasdfasdf
		asdfasdfasdf
		asdfasdfasdfa
		asdfasdfadffadsf
		asdfadfasdffasdfa
		asdfasdffasdffasdf
		asdfasdffasdffasdfassdfa </Text>
	</CardItem>
</Card>

<Footer style={{backgroundColor: "black"}}>
	<Left>
		<Button vertical success>
			<Text> Save </Text>
		</Button>
	</Left>
	<Right>
		<Button vertical success>
			<Text> Cancel </Text>
		</Button>
	</Right>
</Footer>

<Item>
	<Icon name="ios-search" />
	<Input placeholder="Search Account" />
</Item>
<Button transparent>
	<Text>Search</Text>
</Button>
*/
export default AccountSetting;
