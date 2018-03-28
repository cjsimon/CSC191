import * as React from "react";
import { StatusBar, WebView} from 'react-native';
import { Container, Header, Footer, FooterTab, Title, Text, Button, Icon, Body } from "native-base";
//import { NavigationActions } from "react-navigation";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class MyProfile extends React.Component<Props, State> {

	//const param = this.props.navigation.state.params;
	//style={{backgroundColor: 'black', height: 100}} HEADER
	//style={{color: "white"}} TITLE
	//onPress={() => this.props.navigation.dispatch(NavigationActions.back('Home'))} BUTTON

	render() {
		return (
			<Container style={styles.container}>
				<Header style={{backgroundColor: 'black', height: 100}}>
				<StatusBar barStyle="light-content"/>
					<Button transparent /*onPress={() => this.props.navigation.dispatch(NavigationActions.back('Home'))}*/>
						<Icon name="ios-arrow-back" style={{color: "white"}}/>
					</Button>
						<Body>
						<Title> <Text style={{color: "white"}}>The Social Page </Text> </Title>
						</Body>
					<Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
						<Icon name="more" style={{color: "white"}}/>
					</Button>
				</Header>

					<WebView
		        source={{uri: 'https://www.google.com'}}
		        style={{marginTop: 20}}
		      />
				<Footer>
					<FooterTab style={{backgroundColor: "black"}}>
						<Button vertical onPress={() => this.props.navigation.navigate("Friends")}>
							<Icon name="people" style={{color: "white"}}/>
							<Text>Friends</Text>
						</Button>
						<Button vertical onPress={() => (this.props.navigation.navigate("Messager"))}>
							<Icon name="mail" style={{color: "white"}}/>
							<Text>Messager</Text>
						</Button>
						<Button vertical onPress={() => this.props.navigation.navigate("Portfolio")}>
							<Icon name="trending-up" style={{color: "white"}}/>
							<Text>Portfolio</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default MyProfile;
