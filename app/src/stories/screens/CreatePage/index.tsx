import * as React from "react";
import { Platform } from "react-native";
import { Container, View, Header, Title, Content, Text, Button, Icon, Left, Body } from "native-base";

import styles from "./styles";
export interface Props {
	showCreate: any;
	navigation: any;
	onCreate: any;
	offCreate: any;
}

//style={[{position: "absolute"},{top: 45}]}

export interface State {}
class CreatePage extends React.Component<Props, State> {
	render() {
		//const param = this.props.navigation.state.params;
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
				<Title>Please Create an Account</Title>
				<View padder>
					<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
				</View>
			</Body>
			</Header>

				<Content>
				{this.props.showCreate}
					<View padder style={[{bottom: 0},{left: 0}]}>
						<Button block onPress={() => this.props.onCreate()}>
							<Text> Create Account </Text>
						</Button>
					</View>
					<View padder style={[{bottom: 0},{left: 0}]}>
						<Button block onPress={() => this.props.offCreate()}>
							<Text> Cancel </Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default CreatePage;
