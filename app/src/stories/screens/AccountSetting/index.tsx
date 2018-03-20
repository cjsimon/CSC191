import * as React from "react";
import { Platform} from "react-native";
import { Container,Left, Right,Footer, FooterTab, Card, CardItem, Header, Item, Title, View, Input, Content, Text, Button, Icon, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
//var something = "";
class AccountSetting extends React.Component<Props, State> {
	render() {
		//const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header searchBar style={{ height: 100 }}>
					<Button transparent onPress={() => this.props.navigation.goBack()}>
						<Icon name="ios-arrow-back" />
					</Button>
					<Item>
					 	<Icon name="ios-search" />
					 	<Input placeholder="Search Account" />
			 	 	</Item>
			 		<Button transparent>
				 		<Text>Search</Text>
			 		</Button>
				</Header>
				<Content padder>
					<Body>
						<Card>
							<CardItem header>
								<Title >Account Settings</Title>
							</CardItem>
						</Card>
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

						<Card>
							<View style={{
    					borderBottomWidth: 1,
    					borderBottomColor: 'green',
    					width: 350,
  						}}>
							<Title> Privacy Filter</Title>
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

						<Card>
							<View style={{
    					borderBottomWidth: 1,
    					borderBottomColor: 'green',
    					width: 350,
  						}}>
							<Title> Linked</Title>
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

						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>

					</Body>
					<Footer style={{backgroundColor: "grey"}}>
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
				</Content>
				<Footer>
					<FooterTab>
						<Button vertical>
							<Icon name="apps" />
							<Text>Apps</Text>
						</Button>
						<Button vertical>
							<Icon name="camera" />
							<Text>Camera</Text>
						</Button>
						<Button vertical>
							<Icon active name="navigate" />
							<Text>Navigate</Text>
						</Button>
						<Button vertical>
							<Icon name="person" />
							<Text>Contact</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}
export default AccountSetting;
